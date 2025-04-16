import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  // const createModuleForCourse = async () => {
  //   if (!cid) return;
  //   const newModule = { name: moduleName, course: cid };
  //   const module = await coursesClient.createModuleForCourse(cid, newModule);
  //   dispatch(addModule(module));
  // };
  // const removeModule = async (moduleId: string) => {
  //   await modulesClient.deleteModule(moduleId);
  //   dispatch(deleteModule(moduleId));
  // };
  // const saveModule = async (module: any) => {
  //   await modulesClient.updateModule(module);
  //   dispatch(updateModule(module));
  // };

  useEffect(() => {
    fetchModules();
  }, []);
  const fetchModulesForCourse = async () => {
    const modules = await coursesClient.findModulesForCourse(cid!);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);

  useEffect(() => {
    fetchModulesForCourse();
  }, []);

  const addModuleHandler = async () => {
    const newModule = await coursesClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div className="wd-modules">
        <ModulesControls
          addModule={addModuleHandler}
          moduleName={moduleName}
          setModuleName={setModuleName}
          
        />
      <br /><br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
            <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      updateModuleHandler({ ...module, name: e.target.value }) }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateModuleHandler({ ...module, editing: false });
                      }
                    }}
                    value={module.name}
                  />
                )}
            {currentUser && (currentUser.role === "ADMIN" || 
                currentUser.role === "FACULTY") && (<>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
            </>)}
          </div>
          {module.lessons && (
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons.map((lesson: any) => (
                <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> {lesson.name} 
                  {currentUser && (currentUser.role === "ADMIN" || 
                    currentUser.role === "FACULTY") && 
                    <LessonControlButtons />}
                </ListGroup.Item>))}
            </ListGroup>
          )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
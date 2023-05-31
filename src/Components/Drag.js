import { useState } from "react";
import React from "react";
import "../App.css";

function Drag() {
    const [modal, setModal] = useState({ id: 0, name: "" });
    const handleEdit = () => {
        setShowModal(true);
    };
    const handleSave = () => {
        console.log("In handle save ", modal.name)
        tasks.filter((task) => {
            if (task.id === modal.id) {
                console.log("Updating the task ", task.name)
                task.name = modal.name
                task.description = modal.description
            }
        });
        setTasks(tasks)
        setShowModal(false);
    };
    function cardClick(t) {
        tasks.filter((task) => {
            if (task.id === t.id) {
                console.log("I am coming over here. ", task.name)
                setModal({ id: t.id, name: t.name, description: t.description })
            }

        });
    }

    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "STORY-4513: Add tooltip",
            category: "wip",
            bgcolor: "lightblue",
            description: "this is wip desciption"
        },
        {
            id: 2,
            name: "STORY-4547: Fix search bug",
            category: "wip",
            bgcolor: "lightgrey",
            description: "this is wip desciption"

        },
        {
            id: 3,
            name: "STORY-4525: New filter option",
            category: "complete",
            bgcolor: "lightgreen",
            description: "this is complete desciption"
        },
        {
            id: 4,
            name: "STORY-4526: Remove region filter",
            category: "complete",
            bgcolor: "#ee9090",
            description: "this is complete desciption"

        },
        {
            id: 5,
            name: "STORY-4526:filter",
            category: "complete",
            bgcolor: "#C700ff",
            description: "this is complete desciption"
        },
        {
            id: 6,
            name: "STORY-4520: Todo list",
            category: "todos",
            bgcolor: "#Acff00",
            description: "this is todos desciption"
        },
        {
            id: 7,
            name: "STORY-4520:  performance",
            category: "todos",
            bgcolor: "#76b5c5",
            description: "this is todos desciption"
        },
        {
            id: 8,
            name: "STORY-4520:  developement",
            category: "Api",
            bgcolor: "#Fff100",
            description: "this is Api desciption"

        },
        {
            id: 9,
            name: "STORY-4520:  performance",
            category: "Api",
            bgcolor: "#e28743",
            description: "this is Api desciption"
        },
    ]);

    //this event is for the dragged task card.
    //this is required to save unique id in the dom event so that when we drop it we would know the card id
    const onDragStart = (event, id) => {
        event.dataTransfer.setData("id", id);
    };

    //fetches the card id and based on that update the status/category of that card in tasks state
    const onDrop = (event, cat) => {
        let id = event.dataTransfer.getData("id");
        let newTasks = tasks.filter((task) => {
            if (task.name === id) {
                task.category = cat;
            }
            return task;
        });

        setTasks([...newTasks]);
    };
    const getTask = () => {
        const tasksToRender = {
            wip: [],
            complete: [],
            todos: [],
            Api: [],
        };

        tasks.forEach((t) => {
            tasksToRender[t.category].push(
                <div
                    id={t.id}
                    onDragStart={(e) => onDragStart(e, t.name)}
                    draggable
                    className="task-card"
                    style={{ backgroundColor: t.bgcolor }}
                    onClick={() => cardClick(t)}
                >
                    {t.name}

                </div>
            );
        });

        return tasksToRender;
    };
    //t id from props:

    return (

        <div className="drag-drop-container">
            <h2 className="drag-drop-header">JIRA BOARD: Sprint 21U</h2>
            <div className="drag-drop-board">
                <div onClick={() => setShowModal(true)}
                    className="wip"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        onDrop(e, "wip");
                    }}
                >
                    <div className="task-header">In-PROGRESS</div>
                    {getTask().wip}

                </div>
                < div onClick={() => setShowModal(true)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDrop(e, "complete")}
                >
                    <div className="task-header">COMPLETED</div>
                    {getTask().complete}
                </div>
                <div onClick={() => setShowModal(true)}
                    className="todos"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        onDrop(e, "todos");
                    }}
                >
                    <div className="task-header">Todo</div>
                    {getTask().todos}
                </div>
                <div onClick={() => setShowModal(true)}
                    className="Api"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        onDrop(e, "Api");
                    }}
                >
                    <div className="task-header">Developement</div>
                    {getTask().Api}
                </div>
            </div>
            <div>
                {showModal ? (
                    <>
                        <div
                            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-1/3  ">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="  items-start p-7 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="w-40 text-lg leading-relaxed ">
                                            {showModal && (
                                                <div className="modal">
                                                    <input class=" flex  w-96"
                                                        type="text"
                                                        value={modal.name}
                                                        onChange={(e) => setModal({ ...modal, name: e.target.value })}
                                                    />
                                                </div>
                                            )}
                                        </h3>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-8 w-8 flex-auto max-w-md">
                                        <p className=" text-slate-500 text-lg leading-relaxed">
                                            {showModal && (
                                                <div className="modal">
                                                    <textarea class=" flex p-2 h-48  w-96"
                                                        type="text"
                                                        value={modal.description}
                                                        onChange={(e) => setModal({ ...modal, description: e.target.value })}
                                                    />
                                                </div>
                                            )}
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >Close</button>
                                        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleEdit}>Edit</button>
                                        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleSave}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </div>

    );
}


export default Drag;
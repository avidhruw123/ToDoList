import React from "react";

import ToDo from "../components/ToDo";

const TodoList = ({toDoList, handleToggle, handleFilter })=>{
        return (
            <div>
                {toDoList.map(todo=>{
                    return(
                        <ToDo todo={todo} handleToggle = {handleToggle} handleFilter={handleFilter}/>
                    )
                })}
                <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
            </div>
        )
}

export default TodoList;
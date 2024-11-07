import Item from "./Item";

function List({tasks, setTasks}) {
   
    return(
        <ul>
           {tasks.map((el) => (
                <Item key={el.id} {...el} tasks={tasks} setTasks={setTasks}/>
           ))}
        </ul>
    )
}
export default List;
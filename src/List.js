import Todo from "./Todo";
import {Col} from "reactstrap";

function List(props) {

    const {list = {}, status = ''} = props;

    return (

        <div>
        <h2>{status}</h2>
            {list.filter(el => el.status === status).map((el, index) =>
                <Todo
                    key={el.id}
                    todo={el}
                    index={index}
                    isLast={index === list.length - 1}
                    isFirst={index === 0}
                    deleteTodo={props.deleteTodo}
                    moveTodo={props.moveTodo}
                    updateTodo={props.updateTodo}
                    editTodo={props.editTodo}
                />
            )}
            <hr/>
        </div>
    );
}

export default List;

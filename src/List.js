import Todo from "./Todo";
import {Col} from "reactstrap";

function List(props) {

    const {list} = props;

    return (


        <Col>
            {list.map((el, index) =>
                <Todo
                    key={el.id}
                    todo={el}
                    index={index}
                    isLast={index === list.length - 1}
                    isFirst={index === 0}
                    deleteTodo={props.deleteTodo}
                    moveTodo={props.moveTodo}
                />
            )}
        </Col>
    );
}

export default List;

import { useState } from "react";
import { Form } from "../Form/Form";
import { data } from "../../data";
import logo from '../../assets/logo.png';
import remove from '../../assets/remove.svg';
import * as C from './style';

type ItemType = {
    imageUrl: string;
    name: string;
    message: string;
}

export function Feed() {
    const [list, setList] = useState<ItemType[]>(data);

    function addToList(newItem: ItemType) {
        setList(state => [...state, newItem]);
    }

    function removeItem(name: string) {
        setTimeout(() => {
            setList(state => state.filter(item => item.name !== name));
        }, 500)
    }

    return (
        <>
            <C.Container>
                <C.Header>
                    <C.Logo src={logo} alt="" />
                </C.Header>
                <Form onAddItem={addToList} />
                <C.List>
                    <p>Feed</p>
                    {list.map(item =>
                        <C.ListItem key={item.name}>
                            <C.ListImg src={item.imageUrl} alt={item.name} />
                            <C.ListContent>
                                <p>{item.message}</p>
                                <div>
                                    <p>Enviado por</p>
                                    <h3>{item.name}</h3>
                                </div>
                            </C.ListContent>
                            <C.CloseImg src={remove} alt="Delete button" onClick={() => removeItem(item.name)} />
                        </C.ListItem>
                    )}
                </C.List>
            </C.Container>

        </>
    );
}

import React, { useState, useEffect } from "react";
import * as C from './style'
import trash from '../../assets/trash.svg'

type ItemType = {
    imageUrl: string;
    name: string;
    message: string;
}

type FormProps = {
    onAddItem: (newItem: ItemType) => void;
}

export function Form({ onAddItem }: FormProps) {
    const [newItem, setNewItem] = useState<ItemType>({ imageUrl: '', name: '', message: '' });
    const [isFormValid, setIsFormValid] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() => {
        const { imageUrl, name, message } = newItem;
        setIsFormValid(!!imageUrl && !!name && !!message);
    }, [newItem]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setNewItem(prevItem => ({
                    ...prevItem,
                    imageUrl: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (isFormValid) {
            onAddItem(newItem);
            setNewItem({ imageUrl: '', name: '', message: '' });
            setImagePreview(null);
        }
    }

    function handleClearForm() {
        setNewItem({ imageUrl: '', name: '', message: '' });
        setImagePreview(null);
    }

    function clearImagePreview() {
        setImagePreview(null);
    }

    return (
        <C.Form onSubmit={handleSubmit} imgPreview={imagePreview || ''}>

            {imagePreview ? (
                <C.DivImgPreview>
                    <C.ImgPreview src={imagePreview} alt="Preview da Imagem" style={{ width: '88px', height: '88px', borderRadius: '50%', marginBottom: '8px' }} />
                    <img onClick={clearImagePreview} src={trash} alt="Lata de lixo" />
                </C.DivImgPreview>
                
            ) : (
                <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            )}

            <input type="file" accept="image/*" onChange={handleImageChange} />
            <C.NameInput placeholder='Nome' name="name" value={newItem.name} onChange={handleInputChange} type="text" />
            <C.MessageInput placeholder='Mensagem' name="message" value={newItem.message} onChange={handleInputChange} type="text" />
            <C.ButtonsContainer>
                <C.DiscardButton type="button" onClick={handleClearForm}>Limpar</C.DiscardButton>
                <C.SubmitButton type="submit" disabled={!isFormValid} isValid={isFormValid}>Publicar</C.SubmitButton>
            </C.ButtonsContainer>
        </C.Form>
    );
}

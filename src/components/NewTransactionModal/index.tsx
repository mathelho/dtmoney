import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
    isOpen: boolean,
    onClose: () => void;
}

export function NewTransactionModal({isOpen, onClose}: NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

            <button 
                type='button' 
                onClick={onClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                
                <input placeholder='Título'></input>

                <input 
                    type='number' 
                    placeholder='Valor'>
                </input>

                <input 
                    placeholder='Categoria' 
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    );
}
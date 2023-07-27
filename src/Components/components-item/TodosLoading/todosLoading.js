import React from 'react';
import { Placeholder } from 'react-bootstrap';
import './todosLoading.css'

const TodosLoading = () => {
    return (
        <>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} bg='secondary' className={`rounded-4 mt-4 mb-3 tamañoLoading d-flex justify-content-between`}>
                    <Placeholder bg='black' className='rounded-5 border border-black tamañoLoading2' />
                    <span>
                        <Placeholder bg='black' className='rounded-5 border border-black tamañoLoading3' />
                        <Placeholder bg='black' className='rounded-5 border border-black tamañoLoading3' />
                    </span>
                </Placeholder>
            </Placeholder>
            
        </>
    );
}

export { TodosLoading };
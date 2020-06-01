import React from 'react';
import { Header, Form, Footer } from '../../components'

export const IndexPage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="layout">
                    <h1 className="h1">Заголовок</h1>
                    <Form />
                </div>
            </main>
            <Footer />
        </>
    )
}
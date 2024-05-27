import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';

const Blank: NextPage = () => {
    return (
        <>
            {/* ========== header section ========== */}
       
            <main className="content-wrapper">
                <div className='container'>
                    <h1>This is blank page</h1>
                </div>

            </main>

        </>
    )
}

export default Blank;
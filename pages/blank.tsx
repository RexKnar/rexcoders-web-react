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
                    <img src="/img/companies/sobin_sign.png" alt="" />
                    <img src="/img/companies/manoj_sign.png" alt="" />
                </div>

            </main>

        </>
    )
}

export default Blank;
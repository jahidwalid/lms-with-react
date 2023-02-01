import React from 'react';
import "./search.css"

const search = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 col-md-12 text-center">
                      <div className="search-form">
                        <form action="#">
                            <input placeholder="Start Learning! Ex: Fiver Freelancing Course" type="text" />
                            <button>Search</button>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </section>
    );
};

export default search;
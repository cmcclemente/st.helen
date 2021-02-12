import ProductProvider from "./Products/ProductProvider"

const Main = () => {
    return (
        <div className="row"><main>
            <nav id="nav">
                <aside className="innertube">
                    <h3>Left Navigation</h3>
                </aside>
            </nav>
            <div id="content">
            <ProductProvider />
            </div>
        </main>
        </div>
    )
}

export default Main



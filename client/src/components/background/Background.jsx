export default function Background() {
    return (
        <div>
            <div className="grid-bg" ></div >
            <div className="gradient-overlay"></div>
            <div className="scanlines"></div>

            <div className="shapes-container">
                <div className="shape shape-circle"></div>
                <div className="shape shape-triangle"></div>
                <div className="shape shape-square"></div>
            </div>

            <div id="particles"></div>
        </div>     
    )
}
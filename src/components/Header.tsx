import d20Left from '/src/assets/d20-blue-left.svg';
import d20Right from '/src/assets/d20-blue-right.svg';

const Header = () => {
    return (
        <>
            {/* <div className="grid grid-rows-1 grid-flow-col gap-4"> */}
            <div className="grid grid-cols-3 gap-4 place-items-center bg-neutral-700 p-2 rounded-2xl">
                <img src={d20Left} alt="d20" className="w-12" />
                <header className="text-green-500 font-macondo">
                    THEMIS
                </header>
                 {/* Image width: 50px */}
                <img src={d20Right} alt="d20" className="w-12" />

            </div>
        </>
        
    )
};

export default Header;
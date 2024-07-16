

const Banner = () => {
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/fMV6PP2/mfs.jpg")`}} className='bg-center w-full bg-no-repeat h-[450px] flex flex-col justify-between py-1 md:py-4 items-center gap-3 px-2 bg-black bg-opacity-15 bg-blend-overlay'>
            <h2 className="text-4xl font-bold">EasyWallet: Your Digital Finance Partner</h2>
            <p className="text-xl font-semibold text-center max-w-[800px] mx-auto">Manage your finances with ease. Securely send money, cash out, and check your balance with just a few clicks.</p>
        </div>
    );
};

export default Banner;
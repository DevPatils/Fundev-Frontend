import Welcome from "../assets/Welcome.jpg";

const StartupContentBox = () => {
    return (
        <div className="flex justify-between items-center w-full h-auto bg-gray-50 border border-gray-300 rounded-md p-6">
            <div className="w-1/2">
                <h1 className="text-2xl font-bold text-blue-950 mb-4">Welcome to StartupGujarat: Empowering Innovation and Growth
                </h1>
                <p className="text-lg text-black leading-relaxed">
                    Welcome to StartupGujarat, the one-stop platform designed to unify and streamline Gujarat's innovation ecosystem. Whether you're a researcher, entrepreneur, policymaker, or investor, StartupGujarat is here to connect, support, and accelerate your journey towards groundbreaking innovation and sustainable growth.<br /><br />
                    StartupGujarat is a comprehensive web portal built to bridge the gaps in Gujarat’s innovation landscape. We bring together research institutions, startups, innovators, and government bodies under one digital roof, creating a centralized hub for managing research projects, intellectual property rights (IPR), innovation developments, and startup growth.
                    By offering a unified data repository, transparent monitoring tools, efficient resource allocation, and powerful collaboration features, StartupGujarat transforms how innovation is managed and nurtured across the state. From idea inception to market launch, we provide the tools, resources, and support you need to turn your vision into reality.
                </p>
            </div>
            <div className="w-1/2 flex justify-end">
                <img src={Welcome} alt="Welcome" className="h-80 w-auto rounded-md shadow-lg" />
            </div>
        </div>
    );
};

export default StartupContentBox;

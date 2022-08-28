import BrandLogo from "./assets/Brand.png";
import Ilustration1 from "./assets/HeroImage.png"
import IconUsers from "./assets/users.png"

function App() {
  const menus = ["About", "Jobseeker", "Company"];
  const section = [
    {
      icon: IconUsers,
      lable: "Users",
      total: "300+",
    },
    {
      icon: IconUsers,
      lable:"Company",
      total: "300+",
    },
    {
      icon: IconUsers,
      lable: "Hired",
      total: "300+",
    },
  ];

  const features = [
    "Reach candidates in multiple job platforms.", 
    "Build positive candidate experience easily.",
    "Get pre-filtered candidates."
  ];

  return (
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-10 items-center space-x-40">
        <img alt="BrandLogo" src={BrandLogo} className="w-36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-10">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-10 flex flex-row items-center">
          <button className="font-bold">Sign In</button>
          <button className="border border-blue-500 rounded-full py-2 px-6">Sign Up</button>
        </div>
      </header>
      <main className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 py-24">
          <div>
            <h1 className="text-4xl pb-5">
              Want anything to be easy
              <p className="font-bold">
              with LokerKu.
              </p>
            </h1>
            <div className="font-normal text-xs pb-12">
              Provide a network for all your needs with ease and fun using
              LokerKu discover interesting features from us.
            </div>
            <button className="py-4 px-16 bg-blue-400 rounded-md text-white drop-shadow-custom">
              Find Job
            </button>
          </div>
          <div>
            <img src={Ilustration1} alt="" className="w-auto"/>
          </div>
        </div>
        <div className="grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section.map((val, index) =>{
            return (
              <div key={index} className={`flex flex-row py-4 space-x-6 justify-center ${
                index + 1 !== section.length && "border-r border-gray-200"
              }`}
              >
                <div className="rounded-full bg-blue-100 p-3">
                  <img alt={val.lable} src={val.icon} className="w-6 h-6"/>
                </div>
                <div>
                  <div>{val.total}</div>
                  <div>{val.lable}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;

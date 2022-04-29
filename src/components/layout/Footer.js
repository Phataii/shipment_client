export default function Footer() {
  return (
    <div className="bg-gray-700 h-40 w-fit bottom-0">
      <div className="grid md:grid-cols-2">
        <div className=" text-center">
          <h2 className="uppercase text-2xl text-white font-bold">
            {/* Contact Info */}
          </h2>
          
        </div>
        <div className=" text-center">
          <h2 className="uppercase text-2xl text-white font-bold">
            {/* Quick Links */}
          </h2>
        </div>
      </div>
      <hr />
      <p className="text-white text-center mt-28">
        Copyright &copy; 2022 All rights reserved | Desgin by Phataii
      </p>
    </div>
  );
}

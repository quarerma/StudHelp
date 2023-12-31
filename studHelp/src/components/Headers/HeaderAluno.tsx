import { useState } from "react";
import HeaderStyle from "../Models/HeaderStyle";
import { IoSettingsOutline } from "react-icons/io5";
import ProfileSettings from "../Models/ProfileSettings";
interface Props {
  open: boolean;
}

function HeaderAluno({ open }: Props) {
  const name: string = "Gabriel Oliveira Quaresma";
  const course: string = "Ciências da Computação";

  const [openSettings, setOpenSettings] = useState(false);

  return (
    <HeaderStyle>
      <div className="top-0 left-[90%] duration-300 absolute z-10 w-fit mt-4">
        <div
          className="hover:scale-105 cursor-pointer"
          onClick={() => setOpenSettings(!openSettings)}
          style={{ fontSize: "35px", color: "black" }}
        >
          <IoSettingsOutline />
        </div>
        <div className="mt-2 right-6 relative">
          <ProfileSettings open={openSettings} />
        </div>
      </div>
      <div
        className={`px-4  ${
          open
            ? "max-md:text-[1.7rem] max-[560px]:text-[1.8rem] max-[450px]:text-[1.345rem] text-[2.2rem]"
            : "text-[2.5rem]"
        }  duration-1000 font-semibold font-roboto top-[30%] relative flex text-blue-900 `}
      >
        <div className="flex max-lg:flex-col text-blue-950">
          <h1>
            Aluno:{" "}
            <span
              className={`${
                open
                  ? "max-[560px]:text-[1.6rem] max-[450px]:text-[1.15rem] max-md:text-[1.5rem] text-[2.0rem]"
                  : "text-[2.2rem]"
              } mr-4 text-blue-900`}
            >
              {name}
            </span>
          </h1>
          <h1>
            Curso:{" "}
            <span
              className={`${
                open
                  ? " text-blue-900 max-[450px]:text-[1.154rem] max-[560px]:text-[1.6rem] max-md:text-[1.5rem] text-[2.0rem]"
                  : "text-[2.2rem]"
              }`}
            >
              {course}
            </span>
          </h1>
        </div>
      </div>
    </HeaderStyle>
  );
}

export default HeaderAluno;

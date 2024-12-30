import { CircleFlag } from "react-circle-flags"
import { Avatar } from "../../components/avatar"
import { Button } from "../../components/button/Button"
import Icon from "../../components/icon/Icon"
import Input from "../../components/input/input"
import useAuth from "../../hooks/useAuth"

const PageHeader = () => {
  const { logout } = useAuth()
  return (
    <div
      className={"right-0 fixed z-40"}
      style={{
        left: "81px",
        transition: "left 0.3s ease",
      }}
    >
      <div
        id="navbar"
        className="h-[94px] w-full top-0 right-0 px-12 flex justify-between items-center border-b border-[#E3E4E4] z-20 bg-surface-layout"
      >
        <Button
          leadingIcon={<Icon icon="Menu01" className="text-[#636968]" />}
          variant="secondary"
          className="w-11 h-[39.77px] px-[10px] py-[8px] rounded-[6px]"
        />

        <div className="flex gap-4 items-center">
          <Input type="search" placeholder="Search" />
          <Icon
            icon="BellRinging02"
            className="text-[#7E8299] h-[22px] w-[22px]"
          />
          <CircleFlag countryCode="uk" className="w-6 h-6" />
          <div
            onClick={logout}
          >
            <Avatar

              type="square"
              size="44"
              image="https://cdn1.careeraddict.com/uploads/article/59099/illustration-man-suit.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageHeader

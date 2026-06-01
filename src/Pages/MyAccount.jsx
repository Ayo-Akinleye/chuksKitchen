import useAuth from "../hooks/useAuth"
import { User, ChevronRight, ShoppingBag, CreditCard, Settings } from 'lucide-react'

const MyAccount = () => {

  const { user } = useAuth();
  if (!user) return <p>Loading...</p>;

  const MenuList = [
    { icon: User, text: "Personal Information", icon2: ChevronRight },
    { icon: ShoppingBag, text: "Orders", icon2: ChevronRight },
    { icon: CreditCard, text: "Payment Information", icon2: ChevronRight },
    { icon: Settings, text: "Settings", icon2: ChevronRight },
  ]

  return (
    <div className="flex items-center justify-center">
      <section className="flex flex-col py-4 m-4 w-full md:max-w-120 items-center justify-center border border-gray-200 rounded-2xl gap-6">

        {/* image and details */}
        <div className="flex flex-col md:flex-row items-center gap-5">

          <img
            src={user.photoURL || `https://api.dicebear.com/10.x/initials/svg?seed=${user.displayName || user.email}`}
            alt="profile"
            className="w-20 h-20 rounded-full border-2 border-orange-400"
          />

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-lg text-gray-800 text-center">{user.displayName}</p>

            <div className="flex items-center p-2 font-semibold bg-orange-400 rounded-lg">
              <p className="font-bold text-sm text-white">{user.email}</p>
            </div>

          </div>



        </div>

        {/* menus */}
        <div className="flex flex-col w-full">
          {MenuList.map((item) => {
            const Icon = item.icon;
            const Icon2 = item.icon2
            return (
              <span key={item.text} className="flex items-center gap-3 border-t border-b border-gray-200 h-10 w-full py-7 px-2">
                <Icon size={18} />
                <p className="flex-1">{item.text}</p>
                <Icon2 size={18} />
              </span>
            )
          })}
        </div>

      </section>
    </div>
  )
}

export default MyAccount

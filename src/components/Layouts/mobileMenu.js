import { homeIcon, cursorIcon, inIcon, shieldIcon, closeIcon } from "../../utils/icons";

const MobileMenu = () => {
    return(
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  
                  {closeIcon}
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                {routes.map((route, index) => {
                  return <MoboleNavLink key={index} title={route.title} icon={route.icon }/>;
                })}
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Pricing
              </a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Docs
              </a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Help Center
              </a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Guides
              </a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Events
              </a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Security
              </a>
            </div>
            <div>
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default MobileMenu;


function MoboleNavLink(props) {
    return (
        <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                 
                 {props.icon}
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {props.title}
                  </span>
                </a>
    )
};


const routes = [
  {
    title: "Home",
    icon: homeIcon
  },
  {
    title: "Questions",
    icon: cursorIcon
  },
  {
    title: "Help",
    icon: shieldIcon
  },
  {
    title: "Guides",
    icon: shieldIcon
  },
  {
    title: "Security",
    icon: shieldIcon
  },
]
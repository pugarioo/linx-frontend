import { NavigationMenu, NavigationMenuLink } from '@/components/ui/navigation-menu';
import LinkInput from '@/components/ui/LinkInput'
import { Bitcount_Grid_Single } from 'next/font/google';

const bitFont = Bitcount_Grid_Single({
  weight: "400"
})


export default function Home() {
  return (
    <div>
      <NavigationMenu className='h-16 w-full px-15 fixed' >
        <NavigationMenuLink>
          Home
        </NavigationMenuLink>

        <div className="ms-auto flex ">
          <NavigationMenuLink>
            About
          </NavigationMenuLink>
          <NavigationMenuLink>
            Get Started
          </NavigationMenuLink>
        </div>
      </NavigationMenu>
      <main className='h-screen flex justify-center flex-col items-center px-15'>
        <div className={`flex justify-center flex-col items-center ${bitFont.className}`}>
          <p className='text-6xl my-4  text-center'>
            <span className='text-blue-900'>Linx:</span> Short links, Big impact.
          </p>
          <p className='my-4'>Shorten. Share. Succeed.</p>
        </div>
        <LinkInput className={bitFont.className} />
      </main>
    </div>
  );
}

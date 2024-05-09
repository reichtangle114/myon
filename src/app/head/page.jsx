

import Link from 'next/link';

 function Header() {
     return <header>
             <h1>みょん</h1>
             <menu>Menu：
            <li><a href="../otama/page.jsx">おたま♪</a></li>
            <li><a href="../main/page.jsx">画像</a></li>
             </menu>
       </header>;
   }

   export default Header;
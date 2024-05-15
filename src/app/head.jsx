import { AppBar, Toolbar, Typography } from '@material-ui/core'

 function Header() {
     return( 
      <AppBar position="static">
            <Toolbar>
                <Typography>めにゅーだみょん→</Typography>
                &nbsp;
                <a href="/otama">おたま♪</a>
                &nbsp;
                <a href="/main">おたち</a>
                &nbsp;
                <a href="/ichiran">いっぱい</a>
            </Toolbar>
        </AppBar>
     )
   }

   export default Header;
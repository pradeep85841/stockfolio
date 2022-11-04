import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Container } from '@mui/material';
import * as classes from './index.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


const HomeHead = ()=>{

    const navigate = useNavigate();
   
    const handleDiscoverStockfolio = ()=>{
        navigate('/stockfolio/discover');
    }
    return (
        <>
        <Container className='home__head__container'>
            <h1 className='invest_h1'>
                Invest in ideas <br />with Stockfolio
            </h1>

            <p class="Intro__info-footer">Build your diversified long-term portfolio of<br/>stocks &amp; ETFs</p>

            <div>
            <Button onClick={handleDiscoverStockfolio} variant="contained">Discover Stockfolio</Button>
           
            </div>

            <div className=''>
     
     <div>
     {/* <p class="Intro__info-footer text-16 text-normal mb8">Supported on India's largest brokers</p> */}
     </div>
            {/* <Stack direction="row" spacing={2}>
                <Avatar alt="HDFC Sec" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAA4VBMVEX////sCBEANYIAOoXsAAAALn9XbqB+jbIAK37rAAn4s7T1n6DrAAX96er+9vbsMzb72tv+8PHvaWoAIXabrszwY2bsGBuru9Nrg64ACW4AJnoAE3O3v9PuLTEsN4bZCx3vVlgAAF/0f4IwVZPl6fAeQIYAGXUAAGdAU47t8veBlbuMn8DqKSjtOj0AAFkgS45NWpHK0eBgd6byc3VLY5n5xsf3qarlgYbXAAkhLIK5yd4kNX00QYLY4Os5SocXJnH0jY7UfIjVp7Ocob5td6AADWEAAFGeqL3vSk7fWmBmbaCadeGDAAAEr0lEQVR4nO2afX+iRhCACbpKUjUaSBS468UAywFJFKPXq4bENrbX3vf/QJ1ZFvSKSr3qeS/z/LEsMAPPb9ldUFAUgiAIgiAI4qicVUuQceclYWd7sjndRm5zWxK3L5uTbTROZdzr7XFkQzZkQzb/1+b0iDZb7gxXa3adHtSmcf1w8W8uZVxxz8Xl1UFtqm2lVUDGFXe0mneNA9vsQvOcbMiGbMiGbH4km+moV2QUHckm6utF/PGRbAyzUsSqkQ3ZpDYr7Ghzu/d/TCaXS653s+k8rKRO9mKzkXKbL8mONgHZkM3RbFrNFXa0WcnstJR9cFa9ytl19rs7WabubS5uSHaei89XUr/P+xTZfOM20b1d5GjPxYnRXcP0SDblkA3ZkA3ZkM0PYNPqFJBxxR2d9mHfweCruk1fLrwufrlwcti3ZUWZ7d9RnBzWpsjX9ZaVbMiGbMjmMP8Xb/mO4rYkbD827Z9KkHHvSsJ2u/0TBEEQBPFN0nq4kSiduaz9Uv8CxOtsOsunp3b2Aer7X7WDY79a2zZV/E29anNaffOzenCsTTaNq1vgSmnfiWXjuDbVd630/xgsWzdVaVPRdF1TVSyxCjBxGD2v65xzLTu82GqxfEUurTQlLSq4Qyux+eRBOrdhA8cZMCw9zXOAgeXDyQaOwFOZ74TRSLWljdg60MUqg6rGxMaBLg4kNlWY7jjjMfscG3OqKF1uQ9/v3svU6Ux/lG+Uu+ZjujEUraANZXoEq3odKnWuWgNYLrgHKR6HwulDSjC2Sm2CKDKMyAjQpiFtuopi2DaWfUNGT/VZktZe+jhEUa2HOtrbQL76hpNxPFOsq5oHy4TPXLSBQo8g5olXNtvACG+Ajdu3OTctONVDo/o+t+k+W5lN1+vB2epgEyzw6jlw5JodidOmNskMm7PH2aOLokNN2CjGcyJt4CjuMJXZ1DY38zn85HFtuJqsAiln8/lvuU2QJIG0ifw+iqFNtFgMfRT0tVlkhKq0cet1V4kfVbsH0YES8dRG8TIbvH5+ZduYkqQ2apqSeJlNirAxOI9SG9Ft+tAMoQ1d2TczmzTWVv2pEkArx7oFNgG0WbC0iWdbR7gymZw1wYZnbdOeTH7P28aNp27WNiY2h7BxXdfAhop8VR31RplN8PIS48YKnBT7vWODTRym7YM2Lrazv82mk/5Udn2u6xz7DYypZb/54AuF9EqN837z9NbjI+yg93BRkmdpE//xZw1FYEQFsYsZYJP4SW7jfMCaVT7fBLUR4q6OcOzFnH8yphKGNkOY+5iJgwjHVcSztolx1fBjvD64F9vGtZ5ym4EPRfIfbJbkNv7KfCO7EIwInG8+igl2nPaE7jNbnW8SbwFxi/EQGxKumct8TPZ0Md/0UJd/jo1eC8OapY2gtKEK1GYwmHthOEhn01k4jV+N0vsF88I0hOnjKKzpGqbUWBT2GJvVw6hi9cLIYxpkh7vMxfP8PqXbtgV3Fix18QpenJjb2b2A2aZt8nxFwNWKBYFptqaasEHswjyTiWy75Erd4Yd5F0rzAhfn1ePew7+q55t1z37s4PD1Nn9dS5Tmpaz9/bF2cMZrn4sJgiAIgiC+D/4Bj0jUifNSlHAAAAAASUVORK5CYII=" />
                <Avatar alt="KOTAK Sec" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAxlBMVEX///8AOHTsAADtHCTtFh8ANnPuQEHtJCv84eIAKW0AL3AAM3H96ekAK27/+/sAJ2zvT1Di5uwAJGsgNm7tKTD+8/P71tcAG2j3+PpOY47WIDHsAA76z8/u8fTvRkqIj6tDWIfIztpreZwADGOdp7wAEWS4wdCvucr3q6wpRHv0jo9ZapLU2uL1mJruNz33srTwWlvyfH17g6MAAGBANWyILVjLIjf+FxGTnLRDSnzbNEDxYmT4vr/ycnXfNDvSc37AJD1qMGBETT+7AAAEPElEQVR4nO2XWZuiOBRAs1Eiq6KIVnAtStAqN3qjR2t65v//qbkJuHVXfR/1MPpyzwOSGM0hubkJhCAIgiAIgiAIgiAIgiAIgiAIgiAI8j/QnxfjPB8X8/b9HNrJ4kvUtAA3eIrG0/tI5J3ApmeazckdRFLLN+g1dpT3byvRnz0dO//67fuPTnXvBq831Rg0jxad70KIzmlA7Ft6zAJKDdcPfIt2HgUHDavpNy3lQW+3ZpJnSi1azKfp7NlWGlYwS9JkDFbUWpzbmeFH/2B671T2PmfRpga1BkN9P/35yLmclFPRfvEpDZKqp2zUNd/9fbjZyj80zGzd+pxG7lN7cVwT7b+EbB0L/YFFjUUpuGbifQ1vzyT7XcMUTH5OYxhRGp1ShLeVI+/6u1TfPoiPNLaCs98rzQYXn9NIYTAm8PyviUri3paVnfXbbajMXWoPLjXMOI7hwzmslqvYAYk4HgkuoRYq49XubZf1LjR68IVTS2PsUisn/ZcgaAYRzf/OdO18YliTOZm6x1kpNWCwGYu9ZYPBTLBuRkzGBOecsQYJW1ApoXp10jhAa/ZhYF/xYlM/IS9l5jCiX7qy+AKJ3Q7GYwhf4/Ws0ZKcZaTFuNIRgu0uNJw1Y1xCETxKjZDDsqu3YPoTmwbpMCjzlTXR4VlEpZTrgoU1PWo4K8bZjizBYn0wswb0mGXZGiYlyzYkXPY8j8RdaOiVGnuQ3tSyOGpU/ZbZexpU+8u1xvqg+g89Cd2rZ9xA8YF4o3OIel5IdpJzU2lsobnc1bPQk+KO9aQY1pO2CCOrkiqSBT1NCu82OBcQH9B7V7eDDhkJlYZeXIe9nipo1AMN3mgoy7pAiNovEKJW5A90h942HahzR2QnpL0wTiEK/wvD3yMxqxZjCNPBwpPGkgkp19q11OjC2NXWgAVruLBzvE5fy7S1Y15/Op7NEqhMg4sFu85AYEQcuPI/R6MnudybTvgmSw2xhUiSy7oaKizc/FzOmDxvqxA4F+nLUTG3JAL6jXVL9bhhq9SASFEpR4VKqdEirGpYixzCopkcSyrufg6rQuKfkrlesKZ6/hi65zyLV6pw0FlULs2eCsg3s7dn/KSxgYHp1ste5dZmBOUz9wu1w7qDcntPL7Y2FaKmWgawVvY6b8AtU2MO65fDhHgqcqBqfx4NohLsW93hUBs9jSZFmhaLQJ83LH+czpNBBFtvp2oEeRPG3IEkyfZexjTioL7xHnRKJbFaJ2zZg8sBshqDVRKrmqyuhzr2UNv1fdeojj2G5ftN+/LY4wAQASF8qE0nzlab004HhUwZxavMJB60CNXFqX5Vd1auDoGPQsg7HQLVkdg4ash/vh0tXP+2R2IVjeWAdP694wsCUa9LxtXrkuve43VJiRTnl8fn5/w+EprhvMjVq3R665hAEARBEARBEARBEARBEARBEARBEKQW/wGli1i+4Q2zxAAAAABJRU5ErkJggg==" />
                <Avatar alt="ICICI direct" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAA6lBMVEX///+uIC33kRj3iwD3jQD6lReqABqtHCqnAACtFyasGy2qFS72hwCpABGsEiP37O369PT+9e3NgHnmx8i9XWHx4eH81bbDSSrpz8//+vb+8efZqKv5sne8V16qABbdsrT82r7yixvgt7LWm5TGb2njwL7gsKe8VVGwLDLAZWKuGB+6Tk7t1M+1NTTbqKXXn5zBam3Mhov11MK/RzW1PUbTmJzvq3y4Qj7sjEH/5c7nfi3QjIbnexbtfQDIUSbcbiC5OCv4p1zSYCX6wJHRd2O2HwHVWgDFdnj5ok73ljLMUBb7yJ/5rmq1IxTb0ScMAAAEJ0lEQVRoge2Za1PbOBSGbVm25WsckgAJuZneXGjapku6GzZAIG2BLfv//05lW7Jlmd3pTI+y+0HvR2kmj8/92DEMLS0tLS0tLS0tLS0tLS0trf+Fuu9OXxy8fHnw4tVg7+zB6zfZWeTEVE5kvjndJzs5fXsWea7J5Xrk/N3e6O8XxDMledH7PcGjaWl3TIhHnOoByIc9wF8tGNwlH3s0DMuaH/VUw0cHEYt4bDJYv4qD6ymmf/qN2xpfdNjZSjBfbfg/E58bmnG6iHd/H6qDj/6oQdO60fSFIiDqqm99GVcYZ1UdD9y6/E3nT1X0+Ua0MqnOhcynxf9WEf3wyvVrSr8674l00z1P/uU3foEemjXdjCvfd4jbwGdKhs9huBDoZrxk58dOg26aZyrwh/g6aBhpFj5OVjJdSeqv8U3QpMSTXmewupiasiJ460dW2sJ4hJCW6fk5OH6I7K0vQZxoGj8DF5shlG7xXdP1cdRfzU6WmdPGe+fQXXdnpc20iz4eFxfJJG7jvwDT15Z9JLreMauhPmhtPGb8GZZOA78RjHfJUmhrmRx+/+shLP4WIyHvnOxYuOuYMj741gWlz0PReHLf6OizVtn7D6CZN3xEdeQ956R520q94K8dJJ1mPdpwepxJi2RCZOODqxEkfYSRzZu9cyE3lBPZ98G1DUk3xhZCPOkmrdtJq+7C75D03Hg2a+I2vSP7PrjBoHlPjbevi9CXrTzpiP5fSb73t3gMSe9S19ul8flmOVhmhEzqyutLvg82eA2Jp2mPWLv3JrN7ko84MuO3g0ii3+EnSLqRG8/XDM+JKzeUknzvb20LtOrmIarLjsvhS14r71PYyBtjjFBz2FFNufWDZr8PbuwQ1PghpSMkrzkR77uzRuiDO9uC7be57xFaNOkm4ROv0e9pu0MpKL3wfRvPF9nkTKQf2cgCLTrDeHgOX22S4qtVQYd1vTFC6JnYe7z3Cu/0OR3Dznm64hWhR1Lmx/fsul6z8rgj2JI38pe6nG5LKzZP/HrU05xHKJwD04uOS/GXTTxhmcfLzqf1jsADb/DE5yOHZ57JJs6yLDs/u6R0fAtOzzfctver0JfTLtimOf1RweckhkepmHsRm3dJ/jmndLwauvHE8Lb4as2/6NBFxw+O0pIOu9kzsdg33O9dsMseCbYbu6AjJXTju4VqPgvAlM+bk78vC7gyOps4JX+zKB8g5p8OdriAI0tJ3HONMKr59uZ6GwRBte2OS9eEsNtVQw8IiQ9Aa+DqE78rexLsVi+pDj5/hDrH846MU+B36aa6WMILrbVrWeED9JSRtJPMF6faeqfU9EKP+B+M349GqcjHCv8oeF7rx9r/oXpvt9R9CpkDLNh3iJ/V+ikMMcbhf0OnGs534zHwFq2lpaWlpaWlpaWlpaWlpfXr+gEkwE4tQaBk6wAAAABJRU5ErkJggg==" />
                <Avatar alt="AXIS direct" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgONrY81KeNx59ZPmHYFBYfd0ZHKaVhHripXFXW3uq-A&s" />
                <Avatar alt="IIFL Sec" src="https://imgnew.outlookindia.com/public/uploads/articles/2021/10/21/IIFL_Securities_Healthcare_Insurance_Subsidary_Livlong.png" />
            </Stack> */}
            </div>
            </Container></>
    )

}


export default HomeHead;


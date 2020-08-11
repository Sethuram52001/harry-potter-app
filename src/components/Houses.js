import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import GryffindorImg from '../images/gryffindor_img.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Houses = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    	<Card className={classes.root} className="Card_css">
      		<CardHeader title="Gryffindor" />
      		<CardMedia className={classes.media} image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUUExMWFhUXGBsaFxgYFx0XGhcaHRoYGBgYHRoYHSggGBolGxcVITEiJSktLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy8mICYtLS0tLS0tLSsvLS0rLS0tLy0vLS8tLS0vLS0tLS0tLTUtLS0tLS0tKzUtLy0vLy8vL//AABEIAO0A1AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABDEAACAAMGAgcDCgUEAQUAAAABAgADEQQSITFBUQVhBhMiMnGBkUJSoQcUIzNicoKxwdFDkqLh8FNjsvGTFSR0g+L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAMREAAgIBAwICCAcAAwAAAAAAAAECEQMSITEEQQXwEyJhcYGRobEUMkJRwdHhM1Lx/9oADAMBAAIRAxEAPwDcYIIIAIIIIAIIIIAIIIaW3iUqV33AOijFj5DGAHcEVSd0yQkrLHrifQYfExAcV6QvQ9Y1fd18iB2b3lAF7tHGJKEAzAScgvaNdsMvOIfifS1UBugV0r2j6A0+MZna+kpY4sSNv2GkRU/ik/A0Y1NAxGmwOV7nAF34r0wmGvWKyroDhe8hhT4xGWXpKobsIqNpdFPI0x/WINeE2h0vzOyh1fsjzZ6CnnDXh1gvsRKnymYG7RXBJ5gEi8ueI9ICjTuG9NX7ImLQHIkVrzBGnkYsknpFJIqxujfMfDH1AjELY1qs7AOjGppQhsfCoBr4Q4k8adCQxYH2QfZ/vzgDepFoRxVGDeBrCsY9wzpNUirE0GeteRzrFrsPSeYi1mMGHqByqMa+sAXaCILh3SqRMGJu6VOK+unmBE2jgioIIORGIgDqCCCACCCCACCCCACCCCACCCCACCCOZjhQSxAAxJOAAgDqGdv4nKkjtsK501/sOZiB4t0lY4SAVTWeym6OainxOEVMmqAzmONWVya9bzY7002+AEzxDpe80OJPZu86V/FoeQoecVc8cJxZq54UoP3J8YYWq2gVAqAclXDHTAa1hhJsLm8bQ11QK3gQBTZjkh8iToIA9tHF2DkgC8ciNeX3oTEudOz7I1qfzJwXzIiMt3SWUB1ciWHA9oiinnj2m8yByiGtVqnTvrJhKjJR2UXwUYRXLIka8PRZMnsLEbXYrPi8w2iYPYlCqg7GY3ZPkDCE/pxam+oWXIGQurff/wAkyp9KRBSLHWHy2YA4aCM8+ofY6/T+FQ5luNLVNnTyWnTXmEauxPoDgIbfNB/1Eq8uiiEzLyin0jZ0fwsIqqFuHdI7bJAVLQxX3JlJi+FHrhEkOlMmcAtqkXD/AKknIeMpsh90iIfqqYwTJAr4xOOeSMuXw3FNcbk9Z7CD2rPPWaPs4MvIyz2l8RWFf/UpqYOOzkTmDyw15ZxUms+NVJDDUGh8iIf2bj85COsHW01ODj8WvnWNEM6fJyc/hmSG8d0XLhnFiEoaDamY/wD1E/wbpBNDm43ZGJwocchdycnwrFMsU+z2qplkrMpUoBRj+GtG8V9IVsLzZVDMJFe4VOR5ke1T9YvTs5souLpmvcH6WS5uEwXG+GG4zHxpFhRwQCCCDkRiDGS8MnSpn1husMb4zO33jlhErwzis+RMahxJB6ihIZffFK3GOunjA8NHgiP4XxdJ2AqjgdpGFGHMe8OYiQgAggggAggggAggggAiF6YWWZMszCXiQQxX3gMac8aGmtKRMswGJNBzj2APnKR0yt9lmETZnWIe8hAyyNwjKmYizcbno0iW8ti0mYooBmGOII2rj4ERI2n5N51qtcxp92VI612qrAuyFiQq07tRTE5bQ16eWQWa0CUihZTKGRRkuYIHmlfxQBTbNOKTVV/aYCvI7c4gOkE+YWWUzsVAvAHKpxJO55mJq2SQQAAak9mmdRkYi+NSD1ssnMygfQkfpEMjqJp6SOrKkMbNZ4fLK+GcLSpPZrHTL2D/AJrHOlOz67Fg0r4BZlhaXr4xxLOceM4BiDNMVSR7mKbQXajmI4mHUR6k3+8eD2M8YU8I85eYhSdiKwi/+eBiSIPZnE3Q/wCVj2ctVDajOCmB8YPYpuY9Ic2RluF1qqaEGoIwI1wMWWzW9uq6yYxYvczyxv1NNTRVxiuW84E7kxOCzlRKqOyEQ8gSAQT6xtwPY+b8USUkTfCSwIJBqcJfInKux57AxJ9LOlL2NhKs71nugMx2FQo3puaGgyAiHkzrgJGdR+36mL5xH5PVtdjkTVIW1Xb5Ld1w9G6t6CuAoAdKRoOSQ/yZPbbRaFec5cKQ94gAqKEMKjQg0pvXaNjirfJ7wedZpDpOQKxmEijBqrdUDEcwYtBYYCueXOAPYIIIAIIIIAI8JgZgASTQDEk5CM76V9JmtJNnszXZX8SduuoXl+fhmB10iti26fLABNlkt9I3sszYA090Uz+0TE5ZukcizsJE2ZdFPo2bKmik8tDtnzzu3W8yZZlyCxUkClcWp7Qp8fKG7m9LAdrwONCLwX7tcR5EQBtScQkkVE2WRuHH7xmXyl8WkzZ0tZbK5lqbxU1AJvUFRr+8VQ2UyxWWCb2QV2B54GtIbGSXKszAaHGrYeya/tACbN1a9rvgY7U0p9mGfSJKTJH/AMdT/MWb9YdcSl1BQEmYxCy6ZlmwHlU4w26QMGtcwKarLCylPJEVD/UGinO6gdDwzG59Qq7CckYUhJ8MBjXTWOZs/G6px1O394Xs/D1zmMFB3PaPlnHNe27Pps/WxgtGNW/37IbrImHMIPvN+i1hT5tMGay3GwqD6xNybDKAqJeG7Cn/AChKfKk6AVHuPdPwNDFXpd/P9nPlrlvJ+fkRUuxy3NFZpbe62IjpbHcNHah0qOyfMUIjv50pcIL02oqLqFpi6Yqgr5iHdmtSE9VMrQ5XgVZdsGAwziTckRjkfaX1/wB+wzm2crWmI1BzXnzXnDaZl4Z+GhiSm2d0JUZriBy3XdDkV0MJFFJUDAOpMvxzZDuPyxhGRrx9W/yzGUpcIbu2NIdy1ummh+B1EJzZVSfIxZe50Hj1RVEdb07J5E/GLXa5t0SNns8o/wBN0/lFdtaVWo1GMTckCbY7I5P1ZmSH5G8XlV5XS0bemfY+b8Yg00xazzBXLsm6UrsGFfKhNI3bgXGrPNkS2lzUIurUXhVTQVBGhEYMtjvKDepj6jKkOkZ1JXEqMCyuQq/A/wBo1HENv4p0lssgVecldFVgzHyB/OKP0plNaAtoUnrqjqgPYUGou7Y4ltT5RULPZpaNXC8NaF/i5p8IeDis2VNqrFw3eZsbtfe5QBrnR7ja2mXWl2YuExDmp/aJaMdkTnkuLRZ3PWJUTEY16xdTzrh/gjS+jvH5VqSqmjgduWTivPmvOAJeCCCAMn6QdJLTbWMmWolySTriyqaVauh90b41iDtNrEpVl3SVY0UigJOgPKusWDprw9pTGWBdqzPIfIMGxeU3n8ADvFTl8QuKWYAzMmDCt37IByH5wAW21GW9094977PIQyt9v6t+zdukdq8TS9SppTI5V5wnarXVlZhWvdO1Dkx25xD9Ke9JT/bDtzaYb35UjyTpWWYsbyTUUWGzW3sgI8sNqxmp+TEUEeTEF681osqn2r0y/eGnYQHEbgxUrPZF1GAGP7RIWexqBWmNK+FYzS6mux2MfgzlzIdWm1BJgeTNaY9a9YZfVqDSnZU1OG5hqEuISTjv/mZhwQKbQwnhnIvG6oxpy3PjGaWR5HvwdOHTY+hxNx3kxSxmmIGeZzrFgsNiui+3eOW45+MM7CqoEdhUt9VLGZ+1yHjDu0cTlqaO4LH2UBanLsjGM2RuTpIw46SuTPbTKLZS1bnMx+GMVziC44pLFPcFPhFlZ6jAHzw+GkR1olLjUVJ5RHHKmTyRUkObFPWRw2TMQG9OtDifMXNbt4S0qMQKAHz5wpapy2uUoLFpklxRs36t8GFTndIVsdqRB2DiE2zXyirMlTMJkmYt6W9MjTRuf5xZeFvLcB0kSZOxlsSRXNSCowrpjDMtL1+3n+H9tuxmxW/UYhO4Va1VSCsxV7swCophgw7yH1EMHbq5ksTUKdsMtclJqr3WyZSCSNQcDFzsjlDVDSveQmoPNTCXFbMsxCCoI1Uio/secURz77r+C5xfYpUsVXHUk+pJhFmxB2GMOOq6s3MSBlXOm3OkJSV70a07PoMTUscXH9vqjib/AHhvJnvKvoK9W90uo+yagjYj9YcEYCPWXtL4H9IthNwdoo6np4Z46ZEnZJ8pkolrlD7M9DKdNwriqmu8PEmlAAs2QU91ZyHDxJB+EU21yhXzhK02UA5aRsXUX2Pn8nhNN1Lgstqt11mEsy+0MAXv3DXSmFPHKHcq2hEUjEmt8E1N7JqxR3SmIwi3WmYLstyKiYiTKDO9Qq3lVcYuhPUc7qOmeFrcnVtvVKkyhKnBCPe90105w9BnS3+cSCFmJiwGGGwr3l33iHsnE7tEcKcKZVAB0Gw3OsOLG96ZiT1C0ru+P1Y3Ff2iZmNE4V0/FylolMswGhuCqkUBBxyzy5QRLcC4GDLvz5YEyYb5X3AQAq+IAFeZMEAS3FuGy7RKaVNFVPqp0YHRhvGA8W4fMSZMR+0yOFGlRiCfCoHrH0VGL/KPw1ltk9xWhQNht2Wr/MrwBWJMwKxQgVIINQDXD8hEP0pX/wB0Bp1Mmn/jWHiyyzrgeszUDJxvyprDXpL9dKY62eV/SCp/KK8v5Tb0H/OhGQmQ3NT+cP64NEfJb4Q9Ddk+cc2R9jhqjqmA2iLaeGYk9wGpHvEd1fD+8O7dPupQZkQxsVnLsBoMTsBuY9gqTbOZ4pm1SWKPvf8ABIoxbtzXKBhQUxmMvuoPYTmc4cWa2S5eEuTSvOrH4QytNoVKk1OOJyJ5VOQheyvPYXlSXJT3nGJ/mNT+UVyjat8fIwRlTrv7r8+eSZlsxFSt3lmfOG05b1QM8idF/vyhjMe9RVmvOZjdF3sywda071MTQbQvJngMQv1clCfvMNfAYxVorcvU72ErYoo6j2DLHgSww9IkeAkGXUYNUhudCbppvdpERZ1JBQ5l1djyCsT8SI64c5Vag5/A6GJZI3GiuMvWTLJaJRJFGu6VNaDnhpDK3JxKzKWdbwqLoWW01JiH2lmSzgRhgwGu2Pkviop2xd0vDLz2iWkCeF+hmuqnH6OZQHyBpFONqG01Z7lTl+WVEBaOJSp0m+6tLnBqDKg3rUVpSsNbMcK7xdOEW6YiPKm/SKSWIYVIri1VIxBNThvFe43w9Zf0kofRE0uj+GTp906ekShON6V8Dd4fm0ScZvn7/wCkU4zjxRU3uVBHSY3v80jkmgi861dxjaUre9Y6tkqqA7AR3NXBvCkd5pE0yiUE79qIYjA+EXGyzQlns7Glfm9KkV/izIqlpSl7wiw2mXWTIBqESzy7zAVuks7YjY1jdg3s+a8UVaUdS5N4qQOySAfs6nypWNL+SrgV4G0zgGKmkoHJTmX8aFabYxmnD5DuxUAgXGKjWhF2p54xu3QGydVYZI3BbyJN3+kLGg45YYIIIAIqPTWwB3QnKZLeWfHvL8L8W6IjpTIvWcsM5ZEweC97+gsPOAMBlNcUoVq9aX60ZSpIF3bLziN48tUkMc1LyyfBg4+DGLF0qst21TFXNyHQDW9nT8QMRfFuHlZDKSGNBMFMRVTdcDwBHpEZq4sv6aenLFkZLwmU3EdJM05w2SdV0P2Y9tD0qNzT1zPpHNa3o+vjlUYOX7Wd2pstWbBR45RJsEkSwrMBuc2Y8hrEVZ7UA7zyK0FJSnVjgtdgAGMNZcpp0ztNU5s23IbeEeuF7PZI4TzNycuZPz9fsSVlm32vIlSO7exWXzI9qZyyEOWlrWrkzH1LY/DICO7CgbBOzLXCvvb+XOEbTaVbsy8V1I18Dtzipu5UixJJW9xJrWQrMMGpdSmSKcCfE5Q6NmpVF9uW8sfepeX1K084i7VINKZbCtSToTt4RMSSZssMpo2BB91xj+YhLZJo8jcm0+fNnNnILXvelGniAP0IhlZGJApjWH8pga0FCtZirqUOExfFGLCm12I6QlCVPskg+A/cU9Y8/c9b4LLw60SpYqXWpzIBVfC8x7fpSF7PxRDTqyKEA0Vak1oMQp7FNajURXbZxZZNAa3qdxbtQDuxHZw84SsnHjMftSgFatSz3qmgoaMlCeyBpnFX4dyWqvse699K3fuLkluLEFKMV3qCDsRTAEfAxUuIcamywyOlCQyspUBa/ZKmtQcRE/YbYgrWdLCpX26UxN69U4j1ywiC6RiXNnB1rSgO2AGBK6EmpodLsMMUpVJbHuiWVqMHucWJuzjvBKFTTaOLPgIUsmp5xaz6WO9ISc4N5wij9k8xX/PhHTPn5wyMzBRy/aLIozZZ1XuObdjgM2IH+esWWZOCzWJAZVIQKe72FC1I11iB4Yt60ITklXP4RUfGkTc+wGWQzNVTQsfdY4kHbxjdgVRPl/FMmrLX7Fg6HWKvziYNllyxnRm0HmVjcrLJCIqDJVCjwApGb9ALB2bMtMyZ7+A7nxMv0jTYvOYEEEEAEcuoIIOIIoY6ggDD+l9kKTFxutKZ5ddwcUJ5EAfzRX1fs9o91qFT7r9lqb6HyjRvlUsVCHA+sX+tKU9QR/LGeWdVa6xNJlKLhVQNjvmcYAqhkmXNKH2CR5aQlOBbH2a578hvEzx6QAyTHBpijgZl10rzFDWIybMJ7bDMURBgFGgA08YxTWmZ2/xLn06j8xOVLLkKMya190ZE+QhS0TwAyJgCbi7hQAWJ5sxzhKRaLoZjmeyByzPx/KG8kFm5mPK33Ml0tuWSFptLN9DLrdGFBm3idBDuzygq93riNA1yWvKo75HpCFhlLiWJCa07znIKKY7w5tE44AqBXuylNKDS8Rn4CKZf9UaIr9T8+f8AxCMy0I2HzdK/YJB9YU4LMKTCq4g5oTj4qciw2wqI4sS0Zq51pHlpkX5jU7LBVYEYdqp/QCDrePY9V7S7/Id8Tn3GSdLxutUjnkR+JcCDyhSdLUTkZcVmDA7lQCvmZbJ/KYQlzfnClSKTipwyE2mY2Dj/ADCEJFprZbvtymQqToQXXH8JA8ohp2rvx8+PqSct7XHPy5+NCPEODTO1MqCCxYuThQ1PaON0gCmNK4UrlAbA6qGYAdkMVJFQCQEqBq2Ju50FTSLDY7bLK1DBDiGVmClSO8tTQEZ+Iivzpkt5v0ahUGAAyzN40yFToNPGJQySltJcFnTxayrQ9nz7hzbZ7T6dYEwAAAlqt1RkoujAeGetY8Rc4DnHrMAI8bbO1jw48d6VR7LGNN4VVqVI3wG+ghFHoSddBuTkBzixcJ4I0siZP7LgApLGLKT7bbMPZGhxOUQm1FWxl6mOKPt7Ea/R83O0xLmoIBAVTqCxqXYZGgoDUVwMQnEbG0plDFa+6DU00Phn4U5iLfxOUhpfJJyCqxVJa6KApF5tSx1rFN4qg62iMxGAAJLUJOVTjthEsEnJnH9NkbtskOj9nwLEgdY1Kn3V7R9SAIk7MjTiVqaOafex/IfpCkmyKJdxsJYohoO0zLi1DoLxxPIQ74UCJmAqFHZ3NcFHjnHWiqVHCyz1zcjW+gtn7DzaUBIlp91M/wCokfhi0w04VYxJkpLHsrQ8zmx8ySYdx6VhBBBABBBBAFZ+UKx37IW1lsreVbrf0sT5RjFmwYoMXDEKozOo+Bjeuk0u9ZLQP9mZ/wASRGJSpSX2mg3ZtUK7EEYg7eMAMuP2AmzzS5qwuTcOTXGA8qRUDViSfPkNAI0AMJl9CcSk0FTmvYL+lVihtRQakZ4nSM+blGvp3s0NlxxOQr+dSYTUnTCuHlDqZZmUKXF1SCwBwJA1I0FTHM+SyzCGFCKYbVFaeOMVposaY8sMy6C1KkLUbKuVfPLnEjYpJHabFziT+kNzJuypf+6948wlbg8K0PnDvhtla0vcDXZa/WPXE/ZXnzjJNqm+xrx+rV/Dz7vke2Xhk20dbNkgHq6KAcOtIqXUHcAihhlKV2mM6KSFQX19pQGIOG6nMRfrI6ywstVVVUUULlT9+cNOJWALOW1Sx2wCJqj+IhFCR9sYHnSM0epttNe7+n7/AKE5Qa3KU6C9gaXsQRmHXUeVD5GGc2aWZlIAMwqHpleB7w8RUxNdJrMJbB07hIbD2W/YisRNpAE5W0wx+AP6RsxtNX52Kcn8/fyxzaJAfq5lK3hdb7yih86A+kMAlxgdLxB/MHzH5Q7FoKX10vqw5Gob40MI29adYB7JUj1Yf8SIlG+O3n+ycJ6ZqS57+fhYp1naMczpn7nyhtfofKJXo5YBNmX5grJl0L/aPsy/M4nlXeIyqKtnXyZ9MWWfhFgFnVJjCs9lrjj1dcqD3qUx0qYZcU4wyE6sd4ccW4hQNMY4/mTkIp9unlhec0qaeWtOdIzYsbm7kcvLkd33FrZxVnJFaty0jzgEoNPSuS1c87oLfmBCHzyilZVVUi6x1YbVzpEh0WQHrmOiAV2vOqn4Ex0MMUnVEMlwwyk+WTjSnRVDmqGhLU7pbtUPidYn+gtkE61SxmvWXvwyxX/mB6xC2N1mvddj1RbtEY3qZKvLLGLh8lkkfOTTJZLkfimIB8AY2nFNVggggAggggAjidNVVLMQFAqSTQAbx3GWfKv0ueTWVLyDBa6B7oep8ARQb1OggC78U4vJmWK0zJUxXCy5gN01o109kjQ5esZU8qWsyYjGjIJShRmzXKkfGI7oGs49ZOmu0uy0DTa/xyhvIADjSuZGdaYw5eQjTTaHmBZzOXCEUpU9lSdCBQV3gDuzWQFjOZu2EmggaL1TChOpqRFb4fwlUId+24y91PAanmYtJdernuuqgU91pjgEfyqTEC80Agbxg62bVRRv6KC3kxCdJv2qUWxVULHmVYUHqwPlDTjFj+umf7stvwlArfGH9lnC7eOmHkaGHUwAhlOIpiNwYwqbi18vqbnBST89iC46SEsgGstvInqv7xYOHSBLlqgwwqfHWI+0yay5QzMpgfEUI/b0gW2kZwn60FFe37iK0ybfs+xY7NPFaMByMOZ2OR8IgrNaA2Ryh0Z5GR8j+kZXDcusi+PCvZmA0YXSaehiuFezdbvIbjeBwDeHdMX40dKGh3GcVLjFgu1ZMcCCNSu33hmDGvBkX5WUZYvnz5/0hrZN7JJzugH7ytT8o4tc6pYbiX8AWP5rCNsm1H3jWFOGcPmT3uoObMe6o3J08NY30krZnhvIUs0hpjBUFScBt58tfKLpKliUiy17q/1Nqx5mOrDw+XJUBcTkWOZOp5eER3GLZTAZnARgnP0sqXBtnPa2R/FLT1j09lcuZ1MRVpmBjlgMue8KWpqC6MznyG3nDWNcI0iGGH6pHjtFg6JSg4tSE0BloT4CahPwiunWJ7oQ1bS0v/VkzEH3rpZfisX4/wAxDq98TLHZSqTBKLVW9RG0psdjF5+TMATUPvyJi1+0k0Yeh+EUeU0t1CFgFajTGOdSAbq8wczpFk4fIdJTyZM4JMoZlmm+zUrdeXtufxV0jUcQ1Ky8WkTHaXLmozr3lBqRTP012h7HzPwDj0+x2gIwZTeAunvA1oGX3jjzBBI1j6J4HxDr5KzMKmoanvKSrfEGAH8EEEAEZd8qXBZstzapLHq5lBPGdGAuo9KHAgKp2oN41GEbbZUmy3lzBeR1KsDqCKGAMTscp7suY79YVYN1VOzlnU95xnjCNttcpnvEjPzpXGo35R1xGS9gtLSZpJQGqNuPYYb1yPMGG4sgD/OKLUsfo88CKV+/mYAT43xBRKQJgZrGc4BrRe7LU+VTTnEPbmrdO4r8TEraLCs2SerA62QKkAUMyVvT30OfKK2Z2lco53UxfpLOl00o+jpDiXMoCNCIcTLQaqwOIH/YiNS0AGh8oV6wVA3jO4GhSH7zaYgVU44Zry5iE+uRjSorscCfWOJUykN7SxQ1ShXO6dPDaIqNknKhwJTIaqYlbPaAwxIB10/OIeRxFGwPYOzZeRyMKzUHlEZJ8SPYtfpJmXNAxUg7wznyGckgY554c67COZM+tFVQohS2vRCgxv4HwGngYglTJNkNw/o8JztNmEpKr2Qvefc491eesWOSEQCXLUIg0GvMnNjzMNDaQoCg4gQj13OJTlKfPHYjFKPA5t1qFNorVrnY3jloIc2y0ViEtE+8eQyjRgx0RfrOjwuSSTHJMcsYKxqou1djowrw62tJnS5q5o4b0OI9KwgxiS6N8GNqnBa3ZaC9NfREGJ8zkIlFblWaSUXZb7ZNlVKpS7f61DXAy5gvAcipqKcok7MBMlLKU3aNeLg4Jz+8dBzhp1cuYHCKqo90DD6tE7v/ANhz848nWlbPL6tcTWqt79d9mEajhgLHaTaFlSpl+Y5ohAIx9on3ABUkimUbfwDhYs1nlyQa3Bi3vMSWZvNiT5xUvkw4AUQ2uaPpJgpLrmsvMnleIHkBF9gAggggAggggCudOujgtlnIAHXS+1KOtdUroGGHjQ6Rjli4gUIR1JdGIAOZatCCDkRSh8I+hozf5S+iNSbZZ17YH0wGZA/iDmPa3GOmIFSs3C5kiYZt4Gb3qD2a40HvLoRrEB0m4arr87sw7BP00sfwm1NPcMTNg41QAkEsOyF389ucJ2SRMkTDMUhqj6RKYMpzFNREZRUlTJQm4u0UN51Y4640pXwi1ce6OSkrPkhmkscVBH0ROhoO7sYiZVmkHNSPOMU3odNG+C1q0xCzWo6w6L1hyOBSXxR2XwIPwIhG08JmyxVT1g5CjDy1jPrg3sXaZxW4wmgg1H7/AAML2bicsC7MW59pQSvmunlCPWhh+Y1ER09qmgqfCLVBS2ZW5uO6LA4ZQGVgVbJhiDHUqflXEw24ZZmRG7LqrYkOyjHcKuXiTpCgABFTmcOcUNK2i5Xszt5uJjmZNoIQmzKGG0yZrE1Ai50I8Qn6anPwhjHtovBje11hMGNcY0j2MtjsGPL0cFoccOsEyfMWXKUsx205nYRKj1zrcU4ZYJlomrKlCrMfIDUnkI0rh9ily5ZskmjKv18zSY/Mj2FOQ1IGlYRsXCxZZRkyCDOcfTTdhqo2XMc47sLCyqVOKP7WVCN+R3i6MaObnzOb9h5hZkKMQyE1DbH3T+8SHQXgJt1p6yYv0EogsDiGYYqnMnAnlhrEbYLDNt88SZQwPeY5KurHkNNzQRt/BeFS7LJSTKWiIPMnVidSTjEygfAQQQQAQQQQAQQQQAQQQQBlHT7oQJTNabOpEs4uq49W2d4D/TOoGWeWVQstrYnDvZVOIpvzj6FIjMenHQCl6fZFNDi8pRUqdXljUbp6bQBUbPLMpi8oscKTFIBB3N0ZjcRE8W4Gs689kKhx3pNag61ltr4QtI4gWF3Jq0LjDDUY+1EhKs6rVpaGgHaSpqftq2YbWmseOKfJKMnHgoMq2PLahBBGYOBHkYsfDeMBhnjEpxCxSbUGJBZRSk9VowJ0Ye0BkTFT4jwabZje78s+2mII57GMebplJGzF1LRKcb4es4dZLA60aaTBsdm2MVRZyn2fjSLHw+18/AxEdI7MFmXwOzMx/Fr+hinA2nofwL5xUvWQjLlLnRfWsPZM5lq10FjgXapw2AwAEQcOrLbLuDCo3GY8tYvlC0QSokrTONxSe81eWRoThlHNwGlMlFBz3MCqCAQajSkdxUlQbE7QgYUP/URExSDQxKMSSFUFmOSgVJ8hE9wvoniDaO0+YkJn+Nh3RF+OLZCWRR5IDgXAZtpNVossd6Y2Cj9zyi9cOlS5UsyrJrUPMPfbct7i50GZhSVMDgS5YAZa3lpRJAyy9tjoYazrkuhQEaOC31nPkY0KKRlyZXMXW7KWkskqe9UCtdwf0hOw2KbbJglSwWJyXQbsx9lB8chHfA+FzrfOuyhgpxqDdljdzv8AZzPxjaejXR2TYpVyWKscXc95zudhsMhEio56K9HJVikiXLxY0Luc3b9BsNImoIIAIIIIAIIIIAIIIIAIIIIAIIIIApfS/oFLtJM2TSXNzYZJMPOndb7Q8wYy21WafJmtImo8umYPeZfssMGXmI+hoY8X4RJtKXJyBhocmU7qwxU8xAGG2W09WS0moX2kG24/UQ5Wek5lEkhGP1jHGW2wKEZ89InOk3yfWiSC9lYzUxvDKaF22fyoeRimyQZWIBAr2hTEHwOIO4MAP+IdG1XFl6g53k7co8yo7SeIqIr/AEh4RM+bk0Ey6wZWlnrFIOBxXEYGuIGUT8njJJKoQwIAJpUAbCuv5R5bpEsXZklZklh3urfvDf73I4GKZYYyd9y6GeUVXJl8EaJbLF1xUIJFqLCvc6qaBuzLhyyhjK6OvKvF7EDSp7b1ULyA71I90MvXUquCrcKs853uyJbTCc1UEjz28Yt1m6KtUfOJoQ/6Muk2b4G72U8SYkmdiElJPAUirrZ16tVByBpi7EaE03hxMmJZ8bOhTs0YEglueWDZ4x76Ncsplnb42CZwr5svYRZINM2vTpo1F/2fLDnCP/qVSRZxcBGOJJUZEucyeUMvnN+hVi7nfG74/tDrgvR602hytmUnSYxNEprebfkKnlFhQ3Y3Z1ArLqGFbzE4MNb0WPon0KnWwLMmhpUutbzCjMBoiafePkDF46N/J/IkUebSdMGIBH0aHdUOZ5tU+EXGAGfCeFyrNLEqSgVR6k6sxzYncw8gggAggggAggggAggggAggggAggggAggggAggggAiF6QdF7NawesSj0oJidlx56jkaxNQQBj3E/k3tFnYtIAnS9l7LjndODeR8oq1sJRurIKzNQwKgDchsax9FQ2t3D5U5bs2WrrswB/PKAMDk2cSSDIq3vjMsNSOfKHM7iDzuxKaq07R90c+fKNG4n8m1larSWmSG+yb6+j4+hEV7gPQNZzMGnFVTssJaXS/iWZsfKAKZaLNKk0aWxKnviuP3gd88IkuG8Cn2ofQSWZTk5qqgblmwPgKxrXCeh1js9CkkFh7T9s/1YDyAieEAZ70c+TCTKIe0N1jaopIQ/e1f4DlF+kSVRQqKFUYAKKADkBlCkEAEEEEAEEEEAEEEEAEEEEAEEEEAf//Z" title="Paella dish" />
      		<CardContent>
        		<Typography variant="body2" color="textSecondary" component="p">
          		"You might belong in Gryffindor,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Where dwell the brave at heart,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Their daring, nerve, and chivalry
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Set Gryffindors apart"
        		</Typography>
      		</CardContent>
      		<CardActions disableSpacing>
        		<IconButton
          		className={clsx(classes.expand, {
            	[classes.expandOpen]: expanded,
          		})}
          		onClick={handleExpandClick}
          		aria-expanded={expanded}
          		aria-label="show more"
        		>
          		<ExpandMoreIcon />
        		</IconButton>
      		</CardActions>
      		<Collapse in={expanded} timeout="auto" unmountOnExit>
        	<CardContent>
          	<Typography paragraph>Details</Typography>
          	<Typography paragraph>
            Founder: Goderic Gryffindor
          	</Typography>
          	<Typography paragraph>
            Head of House: Minerva McGonagall
          	</Typography>
          	<Typography paragraph>
          	Values: Courage, Bravery, Nerve, Chivalry 
          	</Typography>
          	<Typography paragraph>
          	Animal: Lion
          	</Typography>
          	<Typography paragraph>
          	Colors: Scarlet and Gold
          	</Typography>
          	<Typography paragraph>
          	House Ghost: Nearly Headless Nick
          	</Typography>    
          	<Typography paragraph>
          	Common room: Gryffindor Tower
          	</Typography>       	
        	</CardContent>
      		</Collapse>
    	</Card>

    	<Card className={classes.root} className="Card_css">
      		<CardHeader title="Ravenclaw" />
      		<CardMedia className={classes.media} image="data:image/jpeg;base64,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" title="Paella dish" />
      		<CardContent>
        		<Typography variant="body2" color="textSecondary" component="p">
          		"Or yet in wise old Ravenclaw,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		If you've a ready mind,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Where those of wit and learning,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Will always find their kind."
        		</Typography>
      		</CardContent>
      		<CardActions disableSpacing>
        		<IconButton
          		className={clsx(classes.expand, {
            	[classes.expandOpen]: expanded,
          		})}
          		onClick={handleExpandClick}
          		aria-expanded={expanded}
          		aria-label="show more"
        		>
          		<ExpandMoreIcon />
        		</IconButton>
      		</CardActions>
      		<Collapse in={expanded} timeout="auto" unmountOnExit>
        	<CardContent>
          	<Typography paragraph>Details</Typography>
          	<Typography paragraph>
            Founder: Rowena Ravenclaw
          	</Typography>
          	<Typography paragraph>
            Head of House: Fillius Flitwick
          	</Typography>
          	<Typography paragraph>
          	Values: Intelligence, Creativity, Learning, wit 
          	</Typography>
          	<Typography paragraph>
          	Animal: Eagle
          	</Typography>
          	<Typography paragraph>
          	Colors: Blue and Bronze
          	</Typography>
          	<Typography paragraph>
          	House Ghost: The Grey Lady
          	</Typography>    
          	<Typography paragraph>
          	Common room: Ravenclaw Tower
          	</Typography>       	
        	</CardContent>
      		</Collapse>
    	</Card>

    	<Card className={classes.root} className="Card_css">
      		<CardHeader title="Hufflepuff" />
      		<CardMedia className={classes.media} image="https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/scale-to-width-down/340?cb=20161020182518" title="Paella dish" />
      		<CardContent>
        		<Typography variant="body2" color="textSecondary" component="p">
          		"You might belong in Hufflepuff,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Where they are just and loyal,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Those patient Hufflepuffs are true,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		And unafraid of toil."
        		</Typography>
      		</CardContent>
      		<CardActions disableSpacing>
        		<IconButton
          		className={clsx(classes.expand, {
            	[classes.expandOpen]: expanded,
          		})}
          		onClick={handleExpandClick}
          		aria-expanded={expanded}
          		aria-label="show more"
        		>
          		<ExpandMoreIcon />
        		</IconButton>
      		</CardActions>
      		<Collapse in={expanded} timeout="auto" unmountOnExit>
        	<CardContent>
          	<Typography paragraph>Details</Typography>
          	<Typography paragraph>
            Founder: Helga Hufflepuff
          	</Typography>
          	<Typography paragraph>
            Head of House: Pomona Sprout
          	</Typography>
          	<Typography paragraph>
          	Values: Hard work, Patience, Justice, Loyalty 
          	</Typography>
          	<Typography paragraph>
          	Animal: Badger
          	</Typography>
          	<Typography paragraph>
          	Colors: Yellow and black
          	</Typography>
          	<Typography paragraph>
          	House Ghost: The Fat Friar
          	</Typography>    
          	<Typography paragraph>
          	Common room: Hufflepuff Basement
          	</Typography>       	
        	</CardContent>
      		</Collapse>
    	</Card>

    	<Card className={classes.root} className="Card_css">
      		<CardHeader title="Slytherin" />
      		<CardMedia className={classes.media} image="data:image/jpeg;base64,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" title="Paella dish" />
      		<CardContent>
        		<Typography variant="body2" color="textSecondary" component="p">
          		"Or perhaps in Slytherin,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		You'll make your real friends,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Those cunning folk use any means,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		To achieve their ends."
        		</Typography>
      		</CardContent>
      		<CardActions disableSpacing>
        		<IconButton
          		className={clsx(classes.expand, {
            	[classes.expandOpen]: expanded,
          		})}
          		onClick={handleExpandClick}
          		aria-expanded={expanded}
          		aria-label="show more"
        		>
          		<ExpandMoreIcon />
        		</IconButton>
      		</CardActions>
      		<Collapse in={expanded} timeout="auto" unmountOnExit>
        	<CardContent>
          	<Typography paragraph>Details</Typography>
          	<Typography paragraph>
            Founder: Salazar Slytherin
          	</Typography>
          	<Typography paragraph>
            Head of House: Horace Slughorn, Severus Snape
          	</Typography>
          	<Typography paragraph>
          	Values: Ambition, Cunning, Leadership, Resourcefulness  
          	</Typography>
          	<Typography paragraph>
          	Animal: Snake
          	</Typography>
          	<Typography paragraph>
          	Colors: Green and Silver
          	</Typography>
          	<Typography paragraph>
          	House Ghost: Bloody Baron
          	</Typography>    
          	<Typography paragraph>
          	Common room: Slytherin Dungeon
          	</Typography>       	
        	</CardContent>
      		</Collapse>
    	</Card>

    </div>
  )
}

export default Houses;
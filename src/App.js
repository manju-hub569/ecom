import React,{useEffect,useState} from 'react';
import Card from './card';
import axios from 'axios';
import './css/style.css';

function App() {
    const imgrl = 'https://image.tmdb.org/t/p/w500';
    const [Data, setData] = useState([]);
    const [toggle, setTogle] = useState(false);
    const [overview, setOverview] = useState([]);
    const [path, setPath] = useState([]);
    const [rdate, setDate] = useState([]);
    const [title, setTitle] = useState([]);
    const [searchTerm, setSearch] = useState('');

    useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`)
    .then(res =>{
        setData(res.data);
        console.log(res.data)
    })
    .catch((e)=>{
        console.log(e)
    });
    },[]);

    const getdata = (overview,poster_path,release_date,title) => {
        setOverview(overview);
        setPath(poster_path);
        setDate(release_date);
        setTitle(title);
        setTogle(true);
    }
    const close = () => {
        setTogle(false);
    }

    return (
        <>
        <div style = {{height:'40px',display:'flex',alignItems:'center',justifyContent:'space-around',paddingLeft:'5px'}}>
            POPULAR BRANDS
			  <button className = 'btn btn-primary' onClick = {() => setSearch('electronics')}>Electronics</button>
			  <button className = 'btn btn-primary' onClick = {() => setSearch("men's clothing")}>Mens Clothes</button>
			  <button className = 'btn btn-primary' onClick = {() => setSearch('jewelery')}>jewelery</button>
			  <button className = 'btn btn-primary' onClick = {() => setSearch("women's clothing")}>Womens Cloth</button>
			  <button className = 'btn btn-primary' onClick = {() => setSearch("")}>Clear</button>
        </div>
        <div style = {{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
            {Data.filter((val) => {
                if(searchTerm === '') {
                    return val
                } else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val,id) => {
                return <Card value = {val} key = {id} getdata = {getdata} />
            })}
        </div>
        {
            toggle?(<div className = 'mdetail'>
                <div className = 'home' onClick = {close}>
                    X
                </div>
                <div className = 'info'>
                    <div className = 'info2'>
                        <div className = 'pht'>
                            <div>{title}</div>
                            <div>{rdate}</div>
                            <div>{overview}</div>
                        </div>
                    </div>
                </div>
            </div>):null
        }
        </>
    )
}

export default App
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <>
            <main>
                <div className="bg"></div>
                <div className="header">
                    <h1 className="text-balance break-all">SIGPetaKotGor</h1>
                    <div className="desc">
                        Sistem Informasi Geografis Pertanian Kota Gorontalo
                    </div>
                    <div className="buttons">
                        <Link to={"/peta"}>
                            <button className="mylink">Data Spasial</button>
                        </Link>
                        <Link to={"/data"}>
                            <button className="mylink">Data Tabular</button>
                        </Link>
                    </div>
                    <div className="hr"></div>
                    <div className="desc">
                    <strong>Selamat Datang</strong>
                    <br />
                    SIGPetaKotGor Merupakan Sebuah Sistem Yang Memuat Data dan Informasi Pertanian di Kota Gorontalo Dalam Bentuk Spasial dan Tabular
                    <br /><br />
                    </div>
                </div>
                <div className="footer">
                    &copy; 2024 Tim KotGor, Sistem Informasi - Universitas Negeri Gorontalo. All Right Reserved
                </div>
            </main>

        </>
    )
}
export default Home;

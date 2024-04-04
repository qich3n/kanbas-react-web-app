import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function EncodingParametersInURLs() {
    const [a, setA] = useState<number>(34);
    const [b, setB] = useState<number>(23);
    const [welcome, setWelcome] = useState<string>("");
    const fetchWelcome = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE}/a5/welcome`)
        setWelcome(response.data);
    };
    useEffect(() => {
        fetchWelcome();
    }, []);

    const [result, setResult] = useState<number>(0);

    const fetchSum = async (a: number, b: number) => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE}/a5/add/${a}/${b}`);
        setResult(response.data);
    };
    const fetchSubtraction = async (a: number, b: number) => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE}/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };

    const fetchMultiplication = async (a: number, b: number) => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE}/a5/multiply/${a}/${b}`);
        setResult(response.data);
    };
    
    const fetchDivision = async (a: number, b: number) => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE}/a5/divide/${a}/${b}`);
        setResult(response.data);
    };
    

    return (
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>
            <h4>Calculator</h4>
            <input type="number" value={a} className="form-control mb-2"
                onChange={(e) => setA(parseInt(e.target.value))} />
            <input type="number" className="form-control mb-2"
                onChange={(e) => setB(parseInt(e.target.value))} value={b} />
            <input value={result} type="number" readOnly className="form-control mb-2" />
            <h3>Fetch Result</h3>
            <button className="btn btn-outline-primary mb-2" onClick={() => fetchSum(a, b)} >
                Fetch Sum of {a} + {b}
            </button>
            <button className="btn btn-outline-secondary mb-2" onClick={() => fetchSubtraction(a, b)} >
                Fetch Substraction of {a} - {b}
            </button>
            <button className="btn btn-outline-success mb-2" onClick={() => fetchMultiplication(a, b)}>
                Fetch Multiplication of {a} * {b}
            </button>
            <button className="btn btn-outline-warning mb-2" onClick={() => fetchDivision(a, b)}>
                Fetch Division of {a} / {b}
            </button>

            <h3>Path Parameters</h3>
            <a className="btn btn-outline-info mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/add/${a}/${b}`}>
                Add {a} + {b}
            </a> <br />
            <a className="btn btn-outline-info mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/subtract/${a}/${b}`}>
                Subtract {a} - {b}
            </a>
            <a className="btn btn-outline-success mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/multiply/${a}/${b}`}>
                 Multiply {a} * {b}
            </a> <br />
            <a className="btn btn-outline-warning mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/divide/${a}/${b}`}>
                Divide {a} / {b}
            </a>

            <h3>Query Parameters</h3>
            <a className="btn btn-outline-primary mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b}
            </a>
            <a className="btn btn-outline-danger mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Subtract {a} - {b}
            </a>
            <a className="btn btn-outline-success mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
                 Multiply {a} * {b}
            </a>
            <a className="btn btn-outline-warning mb-2" href={`${process.env.REACT_APP_API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}`}>
                 Divide {a} / {b}
            </a>
        </div>
    );
}

export default EncodingParametersInURLs;

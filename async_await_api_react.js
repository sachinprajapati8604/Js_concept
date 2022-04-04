const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

const [apiData, setApiData] = useState([]);

const getData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = null;
    let requestOptions: any;
    requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        mode: "cors",
    };
    const api_host = "http://13.126.31.195:8081";
    const campaign_uuid = "ac1f1ceb-7f7b-185c-817f-83ea287200060";

    try {
        const response = await fetch(
            `${api_host}/campaign/${campaign_uuid}`,
            requestOptions
        );
        console.log(response);
        if (response.status === 200) {
            const data = await response.json();
            setApiData(data);
            setLoading(true);
            console.log(data);
        } else {
            console.log(
                "error to fetch response with response code ",
                response.status
            );
        }
    } catch (error: any) {
        console.log("error to fetch respo", error);
        setError(error);
    }
};

useEffect(() => {
    getData();
}, []);


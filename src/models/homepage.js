import { get_data } from '@/services/homepage/data';
import { useCallback, useState } from 'react';

export default () => {
    const [staticMain, setStaticMain] = useState([]);
    const [staticRef, setStaticRef] = useState([]);
    const [staticAbsorb, setStaticAbsorb] = useState([]);
    const [dynamic, setDynamic] = useState({});
    const [other, setOther] = useState({});

    const getData = useCallback((value) => {
        get_data({ "Sample": value }).then(resp => {
            console.log(resp.Data, "---------------------")
            if (resp && resp.Status == 200) {
                var tempDynamic = {
                    "NO3": resp.Data.NO3,
                    "COD": resp.Data.COD,
                    "T": resp.Data.T,
                };

                let count = 180
                var tempStaticMain = []
                for (let i in resp.Data.MeasureMain) {
                    tempStaticMain.push({
                        "row": count,
                        "name": "MeasureMain",
                        "value": resp.Data.MeasureMain[i],
                    });
                    tempStaticMain.push({
                        "row": count,
                        "name": "ZeroMain",
                        "value": resp.Data.ZeroMain[i],
                    })
                    count += 2.2265625
                }

                count = 180
                var tempStaticRef = []
                for (let i in resp.Data.MeasureRef) {
                    tempStaticRef.push({
                        "row": count,
                        "name": "MeasureRef",
                        "value": resp.Data.MeasureRef[i],
                    });
                    tempStaticRef.push({
                        "row": count,
                        "name": "ZeroRef",
                        "value": resp.Data.ZeroRef[i],
                    })
                    count += 2.2265625
                }

                count = 200
                var tempStaticAbsorb = []
                for (let i in resp.Data.Absorb) {
                    tempStaticAbsorb,
                    push({
                        "Row": count,
                        "Name": "Absort",
                        "Value": resp.Data.Absorb[i],
                    })
                    count += 2.2265625
                }

                var tempOther = {
                    "SpecStu": resp.Data.SpecStu,
                    "Temperature": resp.Data.Temperature,
                    "NO3Wave": resp.Data.NO3Wave,
                    "CODWave": resp.Data.CODWave,
                    "TSSWave": resp.Data.TSSWave,
                    "RefCorFac": resp.Data.RefCorFac,
                    "NO3CorFac": resp.Data.NO3CorFac,
                    "TurCorFac": resp.Data.TurCorFac,
                    "T": resp.Data.T,
                    "Sample": resp.Sample,
                }


                d.push(data)
            } else {
                console.log("get data error")
                return
            }

            setStaticMain(tempStaticMain);
            setStaticRef(tempStaticRef);
            setStaticAbsorb(tempStaticAbsorb);
            setDynamic(tempDynamic);
            setOther(tempOther);
        })
    }, []);

    return { staticMain, staticRef, staticAbsorb, dynamic, other, getData }
}
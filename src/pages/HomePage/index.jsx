import { dynamic_demo, get_data, get_dynamic } from '@/services/homepage/data';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Col, Input, Row, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import CODChart from './components/cod';
import DynamicChart from './components/dynamic';
import NO3Chart from './components/no3';
import StaticAbsorbChart from './components/staticAbsorb';
import StaticMainChart from './components/staticMain';
import StaticRefChart from './components/staticRef';
import StatisticTable from './components/table';
import TSSChart from './components/tss';

const { Title } = Typography;
const { Search } = Input;
var temp = [];
const HomePage = () => {
  const [no3, setNO3] = useState([]);
  const [tss, setTSS] = useState([]);
  const [cod, setCOD] = useState([]);
  const [staticMain, setStaticMain] = useState([]);
  const [staticRef, setStaticRef] = useState([]);
  const [staticAbsorb, setStaticAbsorb] = useState([]);
  const [other, setOther] = useState([]);

  const onSearch = (name) => {
    get_data({ Sample: name }).then((resp) => {
      let count = 180;
      var tempStaticMain = [];
      for (let i in resp.Data.MeasureMain) {
        tempStaticMain.push({
          row: Math.round(count),
          name: 'MeasureMain',
          value: resp.Data.MeasureMain[i],
        });
        tempStaticMain.push({
          row: Math.round(count),
          name: 'ZeroMain',
          value: resp.Data.ZeroMain[i],
        });
        count += 2.2265625;
      }

      count = 180;
      var tempStaticRef = [];
      for (let i in resp.Data.MeasureRef) {
        tempStaticRef.push({
          row: Math.round(count),
          name: 'MeasureRef',
          value: resp.Data.MeasureRef[i],
        });
        tempStaticRef.push({
          row: Math.round(count),
          name: 'ZeroRef',
          value: resp.Data.ZeroRef[i],
        });
        count += 2.2265625;
      }

      count = 200;
      var tempStaticAbsorb = [];
      for (let i in resp.Data.Absorb) {
        tempStaticAbsorb.push({
          row: Math.round(count),
          value: resp.Data.Absorb[i],
        });
        count += 2.2265625;
      }

      const tempOther = [
        {
          name: resp.Sample,
          specStu: resp.Data.SpecStu,
          time: moment(resp.Data.T).format('YYYY-MM-DD HH:MM:SS'),
          tem: resp.Data.Temperature,
          no3: resp.Data.NO3Wave,
          cod: resp.Data.CODWave,
          tss: resp.Data.TSSWave,
          refcorfac: resp.Data.RefCorFac,
          no3corfac: resp.Data.NO3Wave,
          turcorfac: resp.Data.TurCorFac,
        },
      ];

      setStaticMain(tempStaticMain);
      setStaticRef(tempStaticRef);
      setStaticAbsorb(tempStaticAbsorb);
      setOther(tempOther);
    });

    get_dynamic().then((resp) => {
      if (resp.Status == 200) {
        var tempCOD = [];
        for (let i in resp.cod) {
          let data = { time: i, value: resp.cod[i] };
          tempCOD.push(data);
        }

        var tempTSS = [];
        for (let i in resp.tss) {
          let data = { time: i, value: resp.tss[i] };
          tempTSS.push(data);
        }

        var tempNO3 = [];
        for (let i in resp.no3) {
          let data = { time: i, value: resp.no3[i] };
          tempNO3.push(data);
        }
      }

      setNO3(tempNO3);
      setTSS(tempTSS);
      setCOD(tempCOD);
    });
  };

  const [dynamic, setDynamic] = useState([]);

  const on_message = (e) => {
    var resp = JSON.parse(e.data);
    var now = Date.now();
    if (temp.length >= 10) {
      for (let i = 1; i <= 10; i++) {
        var replace = {};
        if (i == 10) {
          replace = { time: now, value: resp.data };
        } else {
          replace = temp[i];
        }
        temp.splice(i - 1, 1, replace);
      }
    } else {
      temp.push({ time: now, value: resp.data });
    }

    var demo = [];
    for (let i in temp) {
      demo.push(temp[i]);
    }

    setDynamic(demo);
  };

  const onClick = () => {
    dynamic_demo(on_message);
  };

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Button onClick={onClick}>开始测量</Button>
          <Search
            placeholder="start measure"
            enterButton="开始测量"
            size="large"
            onSearch={onSearch}
          />
          <Card
            style={{ marginBottom: 24, marginTop: 24 }}
            title={<Title level={5}>动态数据</Title>}
          >
            <DynamicChart data={dynamic} />
          </Card>
          <Card
            style={{ marginBottom: 24, marginTop: 24 }}
            title={<Title level={5}>ref 光谱</Title>}
          >
            <StaticRefChart data={staticRef} />
          </Card>

          <Card style={{ marginBottom: 24 }} title={<Title level={5}>Main 光谱</Title>}>
            <StaticMainChart data={staticMain} />
          </Card>

          <Card style={{ marginBottom: 24 }} title={<Title level={5}>吸收度光谱</Title>}>
            <StaticAbsorbChart data={staticAbsorb} />
          </Card>

          <Row gutter={16}>
            <Col span={8}>
              <Card style={{ marginBottom: 24 }} title={<Title level={5}>NO3 浓度</Title>}>
                <NO3Chart data={no3} />
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ marginBottom: 24 }} title={<Title level={5}>TSS 浓度</Title>}>
                <TSSChart data={tss} />
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ marginBottom: 24 }} title={<Title level={5}>COD 浓度</Title>}>
                <CODChart data={cod} />
              </Card>
            </Col>
          </Row>

          <Card style={{ marginBottom: 24 }} title={<Title level={5}>其他数据展示</Title>}>
            <StatisticTable data={other} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;

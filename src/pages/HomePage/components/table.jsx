import { Table } from 'antd';

const StatisticTable = (props) => {
  const { data } = props;

  const columns = [
    {
      title: '样品名称',
      dataIndex: 'name',
      width: '11%',
    },
    {
      title: '测量时间',
      dataIndex: 'time',
      width: '11%',
    },
    {
      title: '仪器温度',
      dataIndex: 'tem',
      width: '11%',
    },
    {
      title: '硝酸银波长',
      dataIndex: 'no3',
      width: '11%',
    },
    {
      title: 'COD 波长',
      dataIndex: 'cod',
      width: '11%',
    },
    {
      title: 'TSS 波长',
      dataIndex: 'tss',
      width: '11%',
    },
    {
      title: '参考修正系数',
      dataIndex: 'refcorfac',
      width: '11%',
    },
    {
      title: '硝酸根修正系数',
      dataIndex: 'no3corfac',
      width: '11%',
    },
    {
      title: '浊度修正系数',
      dataIndex: 'turcorfac',
      width: '12%',
    },
  ];

  return (
    <Table
      bordered
      size="middle"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 20,
      }}
    />
  );
};

export default StatisticTable;

import { Table, Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useState, useRef } from "react";
import Highlighter from "react-highlight-words";

import { Loading } from "../../../components/Loading";
import api from "../../../lib/api";

export function OpenCalls() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await api.get("/dashboard/teste-dev?cliente&instalacao");

    const orderByDate = response.data.chamados_abertos;

    orderByDate.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });

    setData(orderByDate);
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder="Pesquisar por..."
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Resetar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "QR Code",
      dataIndex: "qrcode",
      ...getColumnSearchProps("qrcode"),
    },
    {
      title: "Referência Cliente",
      dataIndex: "referencia_cliente",
      ...getColumnSearchProps("referencia_cliente"),
    },
    {
      title: "Problema",
      dataIndex: "problema",
      ...getColumnSearchProps("problema"),
    },
    {
      title: "Status do Chamado",
      dataIndex: "status",
      ...getColumnSearchProps("status"),
    },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-[calc(100vh-80px)] bg-zinc-100 w-full sm:px-[2vw] md:px-[5vw] flex items-center justify-center m-auto overflow-y-auto">
      <Table
        className="overflow-x-scroll sm:overflow-auto"
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}

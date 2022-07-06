import { useMemo, useRef, useState } from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button
} from "@mui/material";
import { EditText  } from "react-edit-text";
import { api } from "../manegementcommodity/api";
import { useFetch } from "../manegementcommodity/hooks/Usefetch";

const Paginaion = () => {
  const limit = useRef(6);
  const [Price , setPrice] = useState(null);
  const [Count , setCount] = useState(null);
  const [id , setid] = useState(null)
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useFetch(
    `/products?_page=${activePage}&_limit=${limit.current}}`
  );

  if (error) {
    return (
      <>
        <Typography variant="body1">ERROR - Typography Body1</Typography>
        <Typography variant="body2">ERROR - Typography Body2</Typography>
      </>
    );
  }

  const submitPrice = async (e) => {
    e.preventDefault()

    await api.put(`/products/${id}`, {
      price: Price,
      createdAt: new Date(),
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2
      }}
    >
      <TableContainer component={Paper}>
        <Button variant="contained">Save</Button>
        <Table
          sx={{ minWidth: 650, minHeight: 150 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>commodity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative" }}>
            {loading ? (
              <Box
                sx={{
                  position: "absolute",
                  background: "#fafafa",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                {data.data.map((record) => (
                  <TableRow key={record.title}>
                    <TableCell>{record.title}</TableCell>
                    <TableCell>
                      <EditText
                        defaultValue={`${record.price}$`} 
                        onChange={(e) => {
                          setPrice(e.target.value)
                          setid(record.id)
                        }}
                        onSubmit={submitPrice}
                      >
                      </EditText>
                    </TableCell>
                    <TableCell><EditText defaultValue={record.count}></EditText></TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        variant="outlined"
        defaultPage={1}
        page={activePage}
        count={Math.ceil(data?.headers["x-total-count"] / limit)}
        onChange={(_, page) => {
          console.log("page:", page);
          setActivePage(page);
        }}
      />
    </Box>
  );
};

export default Paginaion;
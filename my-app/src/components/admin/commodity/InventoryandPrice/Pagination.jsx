import { useMemo, useState } from "react";
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
} from "@mui/material";
import { useFetch } from "../manegementcommodity/hooks/Usefetch";

const Paginaion = () => {
  const limit = useMemo(() => 6, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useFetch(
    `/products?_page=${activePage}&_limit=${limit}}`
  );

  if (error) {
    return (
      <>
        <Typography variant="body1">ERROR - Typography Body1</Typography>
        <Typography variant="body2">ERROR - Typography Body2</Typography>
      </>
    );
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
                    <TableCell>{`${record.price}$`}</TableCell>
                    <TableCell>{record.count}</TableCell>
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
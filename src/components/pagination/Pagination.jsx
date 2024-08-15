import "./pagination.css";


const Pagination = ({ pages, currentPage, setCurrenPage }) => {

   const generatedPages = [];
   for (let i = 1; i <= pages; i++) {
      generatedPages.push(i);
      console.log(i);
      console.log("hello")
   }


   return (
      <div className="pagination">
         <button className="page previous"
            onClick={() => setCurrenPage(current => current - 1)}
            disabled={currentPage === 1}>
            Previous</button>
         {generatedPages.map(page => (
            <div className={currentPage === page ? "page active" : "page"}
               onClick={() => setCurrenPage(page)}
               key={page}>{page}</div>
         ))}
         <button
            onClick={() => setCurrenPage(current => current + 1)}
            disabled={currentPage === pages}
            className="page next"
         >Next</button>
      </div>
   );
}

export default Pagination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NetC.JuniorDeveloperExam.Web.ViewModels
{
    public class HomeViewModel
    {
        public List<HomeTableItem> Blogs { get; set; }
    }

    public class HomeTableItem
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Date { get; set; }
    }
}


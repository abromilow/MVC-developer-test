using NetC.JuniorDeveloperExam.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NetC.JuniorDeveloperExam.Web.ViewModels
{
    public class CommentFormViewModel: Comment
    {
        public string ErrorMessage { get; set; }

        public int BlogId { get; set; }
    }
}
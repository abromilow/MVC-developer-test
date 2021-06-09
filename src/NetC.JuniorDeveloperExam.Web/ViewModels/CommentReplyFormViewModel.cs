using NetC.JuniorDeveloperExam.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NetC.JuniorDeveloperExam.Web.ViewModels
{
    public class CommentReplyFormViewModel: CommentReply
    {
        public int BlogId { get; set; }

        public int CommentId { get; set; }

        public string ErrorMessage { get; set; }
    }
}
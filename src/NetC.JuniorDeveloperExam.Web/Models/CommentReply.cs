using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NetC.JuniorDeveloperExam.Web.Models
{
    public class CommentReply
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Date { get; set; }

        public string Email { get; set; }

        public string Message { get; set; }
    }
}
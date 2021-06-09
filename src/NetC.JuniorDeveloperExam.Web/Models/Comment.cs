using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NetC.JuniorDeveloperExam.Web.Models
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public DateTime Date { get; set; }

        [Display(Name="Email Address")]
        [Required]
        public string Email { get; set; }

        [Required]
        public string Message { get; set; }

        public List<CommentReply> Replies { get; set; }
    }
}
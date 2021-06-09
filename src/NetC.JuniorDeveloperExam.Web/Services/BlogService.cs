using NetC.JuniorDeveloperExam.Web.Models;
using NetC.JuniorDeveloperExam.Web.ViewModels;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web;
using Newtonsoft.Json.Linq;
using System.Linq;
using System;

namespace NetC.JuniorDeveloperExam.Web.Services
{
    public class BlogService
    {
        public List<Blog> AllBlogs
        {
            get
            {
                List<Blog> blogs;
                using (var stream = new StreamReader($"{HttpRuntime.AppDomainAppPath}/App_Data/Blog-Posts.json"))
                {
                    blogs = JsonConvert.DeserializeObject<List<Blog>>(stream.ReadToEnd());
                }
                return blogs;
            }
        }

        public List<Blog> GetAllBlogs()
        {

            return AllBlogs;

        }

        public void AddNewComment(CommentFormViewModel comment)
        {
            var blogs = AllBlogs;
            foreach (var blog in blogs)
            {
                if (blog.Id == comment.BlogId)
                {
                    if (blog.Comments == null)
                    {
                        blog.Comments = new List<Comment>();
                    }

                    blog.Comments.Add(new Comment()
                    {
                        Id = blog.Comments.Count() + 1,
                        Name = comment.Name,
                        Email = comment.Email,
                        Date = DateTime.Now,
                        Message = comment.Message,
                    });
                    break;
                }
            }
            var jsonString = JsonConvert.SerializeObject(blogs);

            using (var stream = new StreamWriter($"{HttpRuntime.AppDomainAppPath}/App_Data/Blog-Posts.json"))
            {
                stream.Write(jsonString);
            }
        }

        public void AddNewReply(CommentReplyFormViewModel reply)
        {
            var blogs = AllBlogs;
            foreach (var blog in blogs)
            {
                if (blog.Id == reply.BlogId)
                {
                    foreach (var comment in blog.Comments)
                    {
                        if (comment.Id == reply.CommentId)
                        {
                            if (comment.Replies == null)
                            {
                                comment.Replies = new List<CommentReply>();
                            }

                            comment.Replies.Add(new CommentReply()
                            {
                                Id = comment.Replies.Count() + 1,
                                Name = reply.Name,
                                Email = reply.Email,
                                Date = DateTime.Now,
                                Message = reply.Message,
                            });
                            break;
                        }
                    }
                }
            }
            var jsonString = JsonConvert.SerializeObject(blogs);

            using (var stream = new StreamWriter($"{HttpRuntime.AppDomainAppPath}/App_Data/Blog-Posts.json"))
            {
                stream.Write(jsonString);
            }
        }
    }
}

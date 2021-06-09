using NetC.JuniorDeveloperExam.Web.Models;
using NetC.JuniorDeveloperExam.Web.Services;
using NetC.JuniorDeveloperExam.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NetC.JuniorDeveloperExam.Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var blogService = new BlogService();
            var blogs = blogService.GetAllBlogs();

            var vm = new HomeViewModel()
            {
                Blogs = new List<HomeTableItem>()
            };

            foreach(var blog in blogs)
            {
                var tableItem = new HomeTableItem()
                {
                    Id = blog.Id,
                    Title = blog.Title,
                    Date = blog.Date.ToString("dd/MM/yyyy")
                };

                vm.Blogs.Add(tableItem);
            }

            return View(vm);
        }
    }
}
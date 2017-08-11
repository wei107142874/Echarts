using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace CWebApplication1
{
    /// <summary>
    /// CWebService1 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
    [System.Web.Script.Services.ScriptService]
    public class CWebService1 : System.Web.Services.WebService
    {
        [WebMethod]
        public int Sum(int a, int b)
        {
            int s = a + b;
            return s;
        }

        [WebMethod]
        public int Sub(int a, int b)
        {
            return a - b;
        }

        [WebMethod]
        public double Mult(double a, double b)
        {
            return a * b;
        }

        [WebMethod]
        public double Div(double a, double b)
        {
            return a / b;
        }


        /// <summary>
        /// 患者来院理由分析模拟数据
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        public string ForReasonsOfHospital()
        {
            List<HospitalReasons> HospitalReasonsList = new List<HospitalReasons>();
            Random r = new Random(DateTime.Now.Second);
            for (int i = 1; i < 500; i++)
            {
                string outsider = "本地人";
                string reason = string.Empty;
                int sjs = r.Next(1, 12);
                switch (sjs)
                {
                    case 1:
                        reason = "医院名气大";
                        break;
                    case 2:
                        reason = "专家多";
                        break;
                    case 3:
                        reason = "技术高";
                        break;
                    case 4:
                        reason = "就近方便";
                        break;
                    case 5:
                        reason = "服务态度好";
                        break;
                    case 6:
                        reason = "设备先进";
                        break;
                    case 7:
                        reason = "就诊环境好";
                        break;
                    case 8:
                        reason = "收费合理";
                        break;
                    case 9:
                        reason = "经他人介绍";                       
                        break;
                    case 10:
                        reason = "院内有熟人";
                        break;
                    case 11:
                        reason = "其它";
                        break;
                    default:
                        break;
                }
                if (r.Next(1,300)% 2==0)
                    outsider = "外地人";
                HospitalReasons hr = new HospitalReasons { Id = i, Reason = reason , Outsider = outsider };
                HospitalReasonsList.Add(hr);
            }
            return JsonConvert.SerializeObject(HospitalReasonsList);
        }

        //public string 

        [WebMethod]
        public string GetPerson()
        {
            List<Person> perList = new List<Person>() {
                new Person{ Name = "张三", Age = 19, dt = DateTime.Now },
                new Person{ Name = "李四", Age = 19, dt = DateTime.Now },
                new Person{ Name = "wag", Age = 19, dt = DateTime.Now },
                new Person{ Name = "是的", Age = 19, dt = DateTime.Now },
                new Person{ Name = "按时", Age = 19, dt = DateTime.Now },
            };
            return JsonConvert.SerializeObject(perList);
        }
    }

    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public DateTime dt { get; set; }
    }

    public class HospitalReasons
    {
        public int Id { get; set; }
        public string Reason { get; set; }
        public string Outsider { get; set; }
    }
}

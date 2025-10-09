"use client"

import { useState, useMemo } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee } from "lucide-react"

const coffeeBrands = [
  {
    brand: "后谷咖啡",
    variety: "卡蒂姆",
    channel: "商超、批发市场",
    series: "大众系列、黑钻系列",
    price: "30-150",
    processing: "水洗",
    origin: "德宏芒市",
    export: "国内为主",
  },
  {
    brand: "比顿咖啡",
    variety: "铁皮卡、波旁",
    channel: "天猫、淘宝、线下门店",
    series: "激情峡谷、冠军豆",
    price: "150-300",
    processing: "水洗、日晒",
    origin: "云南保山高黎贡山",
    export: "国内精品、欧洲、北美",
  },
  {
    brand: "爱伲庄园",
    variety: "卡蒂姆、波旁",
    channel: "淘宝、小程序、线下",
    series: "橡木桶发酵、蓝山风味",
    price: "80-180",
    processing: "水洗、蜜处理",
    origin: "云南普洱澜沧县",
    export: "东南亚、欧洲",
  },
  {
    brand: "云潞咖啡",
    variety: "铁皮卡、波旁",
    channel: "天猫、淘宝、京东",
    series: "单品豆、挂耳包",
    price: "75-130",
    processing: "水洗、日晒",
    origin: "云南保山高黎贡山产区",
    export: "德国、荷兰",
  },
  {
    brand: "挪瓦咖啡",
    variety: "卡蒂姆、铁皮卡",
    channel: "天猫官方店、京东",
    series: "精品单品、拼配豆",
    price: "75-150",
    processing: "水洗、蜜处理",
    origin: "云南普洱澜沧江产区",
    export: "国内为主",
  },
  {
    brand: "丛岭咖啡",
    variety: "波旁、卡蒂姆",
    channel: "淘宝、专卖店、小红书",
    series: "庄园级单品",
    price: "100-300",
    processing: "日晒、蜜处理",
    origin: "云南临沧沧源县",
    export: "国内精品、欧洲市场",
  },
  {
    brand: "朱苦拉咖啡",
    variety: "铁皮卡古树",
    channel: "淘宝、微信小程序",
    series: "古树咖啡",
    price: "250-600",
    processing: "日晒、水洗",
    origin: "云南宾川",
    export: "国内精品、日本、韩国、欧美高端市场",
  },
  {
    brand: "漫崖咖啡",
    variety: "波旁、卡蒂姆",
    channel: "天猫、京东",
    series: "单品豆、挂耳",
    price: "140-240",
    processing: "水洗、蜜处理",
    origin: "云南普洱",
    export: "欧洲、北美、东南亚",
  },
  {
    brand: "雀巢云南",
    variety: "卡蒂姆",
    channel: "各大电商平台",
    series: "速溶咖啡",
    price: "100-200",
    processing: "水洗",
    origin: "云南普洱、保山",
    export: "全球市场，主要出口欧洲、北美",
  },
  {
    brand: "星巴克云南",
    variety: "卡蒂姆、波旁",
    channel: "星巴克门店、天猫",
    series: "云南咖啡豆",
    price: "300-500",
    processing: "水洗",
    origin: "云南普洱",
    export: "全球星巴克门店，主要出口北美、欧洲",
  },
  {
    brand: "麦隆咖啡",
    variety: "铁皮卡、波旁",
    channel: "天猫、京东",
    series: "精品单品",
    price: "160-275",
    processing: "水洗、日晒",
    origin: "云南临沧",
    export: "欧洲、北美、澳大利亚",
  },
  {
    brand: "高晟庄园",
    variety: "铁皮卡、波旁、瑰夏",
    channel: "工厂直销、淘宝、实体店",
    series: "巧克力盛宴、花木兰、越蓝山",
    price: "180-320",
    processing: "水洗、日晒",
    origin: "云南保山",
    export: "韩国、日本、欧美高端市场",
  },
  {
    brand: "辛鹿咖啡",
    variety: "卡蒂姆、铁皮卡",
    channel: "淘宝、天猫、京东",
    series: "商业系列、挂耳包",
    price: "50-150",
    processing: "水洗",
    origin: "云南保山",
    export: "国内为主，少量出口东南亚",
  },
  {
    brand: "炬点咖啡",
    variety: "多种品种",
    channel: "淘宝、实体店",
    series: "深烘系列、中烘系列",
    price: "150-280",
    processing: "水洗、蜜处理",
    origin: "云南普洱",
    export: "国内为主，少量出口欧洲",
  },
  {
    brand: "中咖",
    variety: "波旁、卡蒂姆",
    channel: "淘宝、实体店",
    series: "普洱波旁系列",
    price: "100-180",
    processing: "水洗",
    origin: "云南普洱",
    export: "国内为主，少量出口东南亚",
  },
  {
    brand: "斑马咖啡",
    variety: "多种品种",
    channel: "淘宝、实体店",
    series: "精品系列",
    price: "150-280",
    processing: "水洗、蜜处理",
    origin: "云南保山",
    export: "国内为主，少量出口日韩",
  },
  {
    brand: "天宇庄园",
    variety: "罗布斯塔、卡蒂姆",
    channel: "微信小程序、淘宝代购",
    series: "版纳瓦酿、精品罗布斯塔",
    price: "80-150",
    processing: "水洗",
    origin: "西双版纳",
    export: "东南亚、中东、欧洲",
  },
  {
    brand: "简聿咖啡",
    variety: "波旁",
    channel: "微信小程序、线下体验店",
    series: "普洱波邦、手冲精品豆",
    price: "120-220",
    processing: "水洗",
    origin: "普洱戴家巷三笆箩庄园",
    export: "国内精品，少量出口日韩",
  },
  {
    brand: "新寨庄园",
    variety: "卡蒂姆",
    channel: "淘宝店、线下庄园直购",
    series: "保山黄蜜日晒",
    price: "180-320",
    processing: "黄蜜日晒",
    origin: "保山新寨村",
    export: "国内高端市场，少量出口欧美",
  },
  {
    brand: "北归咖仓",
    variety: "多品种混合",
    channel: "微信小程序、微信公众号",
    series: "世界豆精选、小包装混合",
    price: "200-350",
    processing: "多样化处理",
    origin: "思茅区南屏镇",
    export: "全球市场，主要出口欧美、日韩",
  },
  {
    brand: "雨林咖啡",
    variety: "罗布斯塔",
    channel: "小红书商城、代购渠道",
    series: "版纳精品罗布斯塔",
    price: "70-130",
    processing: "水洗",
    origin: "西双版纳热带雨林",
    export: "东南亚、中东、欧洲",
  },
  {
    brand: "秋珀庄园",
    variety: "萨奇姆、卡蒂姆",
    channel: "淘宝旗舰店、庄园直营",
    series: "临沧沧江1号、萨奇姆",
    price: "160-280",
    processing: "水洗、蜜处理",
    origin: "临沧秋珀庄园",
    export: "国内精品，少量出口欧美",
  },
]

const varietyFlavors = [
  {
    variety: "铁皮卡 (Typica)",
    flavor: "明亮的柑橘酸度，优雅的花香，甜感突出，口感干净",
    price: "生豆150-260元/公斤，熟豆75-130元/500g",
    status: "高端精品咖啡代表，深受专业咖啡师喜爱",
  },
  {
    variety: "波旁 (Bourbon)",
    flavor: "甜度高，醇厚度好，风味平衡，酸度柔和，带有巧克力香气",
    price: "生豆120-200元/公斤，熟豆60-100元/500g",
    status: "传统优质品种，适合日常饮用和精品咖啡",
  },
  {
    variety: "卡蒂姆 (Catimor)",
    flavor: "口感醇厚，苦味适中，性价比优秀，适合拼配",
    price: "生豆60-90元/公斤，熟豆30-90元/500g",
    status: "云南主流品种，产量大，适合大众市场",
  },
  {
    variety: "瑰夏 (Geisha)",
    flavor: "花香果香明显，层次丰富，价格较高，风味独特",
    price: "生豆300-800元/公斤，熟豆150-400元/500g",
    status: "顶级精品咖啡，稀有品种，收藏价值高",
  },
  {
    variety: "罗布斯塔 (Robusta)",
    flavor:
      "咖啡因含量较高，苦感与醇厚度更强，常见坚果、可可、木质与香料调；在云南西双版纳等地经精细处理（精品罗布斯塔）可呈现黑糖、热带水果与草本风味，干净度明显提升",
    price: "生豆30-80元/公斤，熟豆25-90元/500g（精品等级略高）",
    status: "广泛用于商业拼配与意式基底；云南产区正推动精品化，逐步进入精品市场与国际买家视野",
  },
  {
    variety: "萨奇姆 (Sarchimor)",
    flavor:
      "来自蒂莫尔杂交系与维拉萨奇的后代，兼具抗病性与较佳杯质；常见柑橘、坚果、红茶与可可调性，酸质中等、体质饱满，适合中度至中深度烘焙",
    price: "生豆70-120元/公斤，熟豆40-110元/500g",
    status: "云南新近推广的适栽品系之一，产量稳定、病害抗性好，适合做意式与手冲的全能型豆",
  },
  {
    variety: "铁皮卡古树 (Typica Old Trees)",
    flavor: "在云南高龄咖啡树上采收的铁皮卡，甜感与层次更佳，常见花香、蜂蜜、柑橘、香草与优雅香料，余韵绵长，洁净度高",
    price: "生豆200-400元/公斤，熟豆120-300元/500g（视树龄与批次而定）",
    status: "稀缺高端品项，多用于限量款、礼盒与比赛批次，面向精品与收藏市场",
  },
]

const processingMethods = [
  { method: "水洗", description: "水洗处理，口感干净明亮" },
  { method: "日晒", description: "日晒处理，果香浓郁" },
  { method: "蜜处理", description: "蜜处理，甜度较高" },
  { method: "橡木桶发酵", description: "特殊发酵工艺，风味独特" },
]

const origins = [
  { region: "保山", description: "铁皮卡、波旁等传统品种" },
  { region: "普洱", description: "卡蒂姆为主，产量最大" },
  { region: "临沧", description: "波旁、卡蒂姆混合种植" },
  { region: "德宏", description: "卡蒂姆为主，速溶咖啡原料" },
  { region: "宾川", description: "古树铁皮卡品种" },
  { region: "南屏", description: "铁皮卡、波旁品种" }
]

export default function Page() {
  const [selectedVariety, setSelectedVariety] = useState<string>("all")
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all")

  const filteredBrands = useMemo(() => {
    return coffeeBrands.filter((brand) => {
      const matchVariety = selectedVariety === "all" || brand.variety.includes(selectedVariety)
      const matchOrigin = selectedOrigin === "all" || brand.origin.includes(selectedOrigin)
      return matchVariety && matchOrigin
    })
  }, [selectedVariety, selectedOrigin])

  const varieties = Array.from(new Set(coffeeBrands.flatMap((b) => b.variety.split("、").map((v) => v.trim())))).sort()

  const origins_list = Array.from(
    new Set(
      coffeeBrands.map((b) => {
        // 提取产地的主要城市名称
        if (b.origin.includes("保山")) return "保山"
        if (b.origin.includes("普洱")) return "普洱"
        if (b.origin.includes("临沧")) return "临沧"
        if (b.origin.includes("德宏")) return "德宏"
        if (b.origin.includes("西双版纳")) return "西双版纳"
        if (b.origin.includes("宾川")) return "宾川"
        if (b.origin.includes("南屏")) return "南屏"
        return b.origin
      }),
    ),
  ).sort()

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="w-10 h-10 sm:w-14 sm:h-14 text-amber-700" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 text-balance">
              云南咖啡品牌档案库
            </h1>
          </div>
          <p className="text-base sm:text-lg text-amber-700">探索云南精品咖啡的多样风味与品牌故事</p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">咖啡品牌 ({filteredBrands.length})</h2>
          <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-row sm:justify-end sm:gap-3">
            <Select value={selectedVariety} onValueChange={setSelectedVariety}>
              <SelectTrigger className="h-12 sm:min-w-[200px]">
                <SelectValue placeholder="选择咖啡品种" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部品种</SelectItem>
                {varieties.map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
              <SelectTrigger className="h-12 sm:min-w-[200px]">
                <SelectValue placeholder="选择产地" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部产地</SelectItem>
                {origins_list.map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {filteredBrands.map((brand, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-amber-100">
              <CardHeader>
                <CardTitle className="text-xl text-amber-900">{brand.brand}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">品种：</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                    {brand.variety}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">渠道：</span>
                  <span className="text-sm">{brand.channel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">系列：</span>
                  <span className="text-sm">{brand.series}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">价格：</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    ¥{brand.price}/250g
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">处理法：</span>
                  <span className="text-sm">{brand.processing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">产地：</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    {brand.origin}
                  </Badge>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">出口：</span>
                  <span className="text-sm text-muted-foreground">{brand.export}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-900">品种风味特点</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {varietyFlavors.map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white text-xl">{item.variety}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-white/90 leading-relaxed">
                  <strong>风味：</strong>
                  {item.flavor}
                </p>
                <p className="text-white/90 leading-relaxed">
                  <strong>价格：</strong>
                  {item.price}
                </p>
                <p className="text-white/90 leading-relaxed">
                  <strong>市场地位：</strong>
                  {item.status}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-900">处理法说明</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {processingMethods.map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-rose-400 to-pink-500 text-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white text-xl">{item.method}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-900">主要产地分布</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {origins.map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-sky-400 to-blue-500 text-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white text-xl">{item.region}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-t border-amber-200 pt-8 mt-16">
          <p className="text-center text-sm text-amber-700">
            云南咖啡品牌档案库 © 2025 | 数据来源于小红书推荐分析和市场调研
          </p>
        </div>
      </div>
    </div>
  )
}

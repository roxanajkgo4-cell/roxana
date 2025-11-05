import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  FileText,
  Smartphone,
  Monitor,
  Tablet,
  Calendar,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { format, subDays, startOfDay, endOfDay } from "date-fns";
import { fr } from "date-fns/locale";

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState("7"); // days

  const { data: analytics = [], isLoading } = useQuery({
    queryKey: ['analytics'],
    queryFn: () => base44.entities.Analytics.list('-created_date', 1000),
  });

  // Filter by date range
  const getFilteredAnalytics = () => {
    const days = parseInt(dateRange);
    const cutoffDate = subDays(new Date(), days);
    return analytics.filter(item => new Date(item.created_date) >= cutoffDate);
  };

  const filteredData = getFilteredAnalytics();

  // Calculate metrics
  const totalPageViews = filteredData.filter(item => item.event_type === 'page_view').length;
  const totalButtonClicks = filteredData.filter(item => item.event_type === 'button_click').length;
  const totalFormSubmissions = filteredData.filter(item => item.event_type === 'form_submission').length;
  const uniqueSessions = new Set(filteredData.map(item => item.session_id)).size;

  // Conversion rate
  const conversionRate = totalPageViews > 0 
    ? ((totalFormSubmissions / totalPageViews) * 100).toFixed(2) 
    : 0;

  // Device breakdown
  const deviceStats = filteredData.reduce((acc, item) => {
    if (item.device_type) {
      acc[item.device_type] = (acc[item.device_type] || 0) + 1;
    }
    return acc;
  }, {});

  // Page views by page
  const pageViewsByPage = filteredData
    .filter(item => item.event_type === 'page_view')
    .reduce((acc, item) => {
      acc[item.page] = (acc[item.page] || 0) + 1;
      return acc;
    }, {});

  const topPages = Object.entries(pageViewsByPage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // Service views
  const serviceViews = filteredData
    .filter(item => item.event_type === 'service_view' && item.service_name)
    .reduce((acc, item) => {
      acc[item.service_name] = (acc[item.service_name] || 0) + 1;
      return acc;
    }, {});

  const topServices = Object.entries(serviceViews)
    .sort((a, b) => b[1] - a[1]);

  // Pack selections
  const packSelections = filteredData
    .filter(item => item.event_type === 'pack_selection' && item.pack_name)
    .reduce((acc, item) => {
      acc[item.pack_name] = (acc[item.pack_name] || 0) + 1;
      return acc;
    }, {});

  // Button clicks
  const buttonClicks = filteredData
    .filter(item => item.event_type === 'button_click' && item.button_label)
    .reduce((acc, item) => {
      acc[item.button_label] = (acc[item.button_label] || 0) + 1;
      return acc;
    }, {});

  const topButtons = Object.entries(buttonClicks)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Traffic sources
  const trafficSources = filteredData.reduce((acc, item) => {
    const source = item.referrer || 'direct';
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {});

  const topSources = Object.entries(trafficSources)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BarChart3 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Suivez les performances de votre site en temps réel
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Dernières 24h</SelectItem>
                <SelectItem value="7">7 derniers jours</SelectItem>
                <SelectItem value="30">30 derniers jours</SelectItem>
                <SelectItem value="90">90 derniers jours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Eye className="w-8 h-8 text-blue-600" />
                <Badge className="bg-green-100 text-green-800">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Actif
                </Badge>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {totalPageViews.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Pages vues</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {uniqueSessions.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Sessions uniques</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <MousePointer className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {totalButtonClicks.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Clics totaux</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <FileText className="w-8 h-8 text-green-600" />
                <Badge className={conversionRate >= 2 ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
                  {conversionRate}%
                </Badge>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {totalFormSubmissions.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Formulaires soumis</p>
            </CardContent>
          </Card>
        </div>

        {/* Device Breakdown */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Répartition par appareil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(deviceStats).map(([device, count]) => {
                const percentage = ((count / filteredData.length) * 100).toFixed(1);
                const Icon = device === 'mobile' ? Smartphone : device === 'tablet' ? Tablet : Monitor;
                
                return (
                  <div key={device} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 capitalize">{device}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold text-gray-900">{count}</p>
                        <span className="text-sm text-gray-500">({percentage}%)</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Pages les plus visitées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map(([page, views], index) => {
                  const percentage = ((views / totalPageViews) * 100).toFixed(1);
                  return (
                    <div key={page} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {page === '/' ? 'Accueil' : page}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-lg font-bold text-gray-900">{views}</p>
                        <p className="text-xs text-gray-500">{percentage}%</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Top Services */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Services les plus consultés</CardTitle>
            </CardHeader>
            <CardContent>
              {topServices.length > 0 ? (
                <div className="space-y-4">
                  {topServices.map(([service, views], index) => {
                    const percentage = ((views / Object.values(serviceViews).reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                    return (
                      <div key={service} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{service}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div 
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-lg font-bold text-gray-900">{views}</p>
                          <p className="text-xs text-gray-500">{percentage}%</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Aucune donnée disponible</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pack Selections */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Sélections de packs</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.keys(packSelections).length > 0 ? (
                <div className="space-y-3">
                  {Object.entries(packSelections)
                    .sort((a, b) => b[1] - a[1])
                    .map(([pack, count]) => (
                      <div key={pack} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900 capitalize">{pack.replace('_', ' ')}</span>
                        <Badge className="bg-blue-100 text-blue-800">{count} sélections</Badge>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Aucune sélection de pack</p>
              )}
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Sources de trafic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topSources.map(([source, count]) => {
                  const percentage = ((count / filteredData.length) * 100).toFixed(1);
                  const displaySource = source === 'direct' ? 'Trafic direct' : new URL(source).hostname;
                  
                  return (
                    <div key={source} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <span className="font-medium text-gray-900 text-sm">{displaySource}</span>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div 
                            className="bg-green-600 h-1.5 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-bold text-gray-900">{count}</p>
                        <p className="text-xs text-gray-500">{percentage}%</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SEO Keywords Suggestion */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recommandations SEO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Mots-clés performants à renforcer</h4>
                <div className="space-y-2">
                  {[
                    "conseil stratégie PME",
                    "transformation digitale entreprise",
                    "consultant marketing Nice",
                    "stratégie croissance business",
                    "accompagnement PME France"
                  ].map((keyword, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ArrowUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{keyword}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Opportunités à explorer</h4>
                <div className="space-y-2">
                  {[
                    "audit marketing PME",
                    "plan marketing opérationnel",
                    "CRM pour PME Nice",
                    "formation marketing digital",
                    "étude de marché startup"
                  ].map((keyword, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{keyword}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>💡 Conseil SEO :</strong> Intégrez ces mots-clés naturellement dans vos pages de services, 
                articles de blog et meta descriptions pour améliorer votre référencement naturel.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
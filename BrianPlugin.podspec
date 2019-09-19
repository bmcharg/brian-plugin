
  Pod::Spec.new do |s|
    s.name = 'BrianPlugin'
    s.version = '0.0.1'
    s.summary = 'Brian's Test Plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/bmcharg/brian-plugin.git'
    s.author = 'Brian McHarg'
    s.source = { :git => 'https://github.com/bmcharg/brian-plugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end